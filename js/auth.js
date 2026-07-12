// EasyToLearn — Supabase Auth + Progress Sync
// Shared by login.html, dashboard.html, topic.html, and nav.js
(function () {
  if (typeof window.supabase === 'undefined') {
    console.error('Supabase library not loaded. Check your internet connection.');
    // Give every caller (login.html, dashboard.html, topic.html, nav.js) a
    // safe object to call instead of leaving window.ETLAuth undefined —
    // otherwise a blocked/slow CDN load (more common on mobile networks)
    // turns into a confusing uncaught error instead of a clear message.
    const offlineErr = { message: "Couldn't load the sign-in service. Check your internet connection and reload the page." };
    window.ETLAuth = {
      client: null,
      getSession: async () => null,
      getUser: async () => null,
      sendMagicLink: async () => ({ error: offlineErr }),
      applyPendingName: async () => {},
      signOut: async () => {},
      pushProgress: async () => {},
      pullAndMergeProgress: async () => {}
    };
    return;
  }

  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { detectSessionInUrl: true, persistSession: true, autoRefreshToken: true }
  });

  // ── Core session helpers ──────────────────────────────────
  async function getSession() {
    const { data } = await client.auth.getSession();
    return data.session || null;
  }

  async function getUser() {
    const session = await getSession();
    return session ? session.user : null;
  }

  // Send a magic (passwordless) sign-in link to the user's email.
  // `name` is stashed locally and applied to the profile after verification.
  //
  // Mobile networks are far more likely than desktop Wi-Fi to have a
  // flaky connection or a brief drop mid-request, and the raw error for
  // that is just the browser's generic "Failed to fetch" — not helpful
  // for someone reading it on their phone. This wraps the call with:
  //   1. an upfront offline check,
  //   2. a timeout so a stalled connection doesn't hang forever,
  //   3. one automatic retry on a network-level failure,
  //   4. a clearer message if it still fails.
  async function sendMagicLink(email, name) {
    if (name) localStorage.setItem('etl_pending_name', name);

    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      return { error: { message: "You're offline — check your connection and try again." } };
    }

    const redirectTo = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + 'login.html';
    const attempt = () => withTimeout(
      client.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo, shouldCreateUser: true, data: name ? { full_name: name } : undefined }
      }),
      15000
    );

    try {
      const { error } = await attempt();
      if (error && isNetworkError(error)) {
        // One quiet retry — this alone clears up most transient mobile drops.
        const { error: retryError } = await attempt();
        if (retryError) return { error: { message: friendlyNetworkMessage(retryError) } };
        return { error: null };
      }
      return { error };
    } catch (err) {
      return { error: { message: friendlyNetworkMessage(err) } };
    }
  }

  function isNetworkError(err) {
    const msg = (err && err.message) || '';
    return /failed to fetch|networkerror|load failed|timed out/i.test(msg);
  }

  function friendlyNetworkMessage(err) {
    if (isNetworkError(err)) {
      return "Couldn't reach the server. Check your internet connection (or try switching between Wi-Fi and mobile data) and try again.";
    }
    return (err && err.message) || 'Something went wrong. Please try again.';
  }

  function withTimeout(promise, ms) {
    return Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms))
    ]);
  }

  // Called on login.html load — if a session was just created via the
  // magic-link redirect, attach the pending display name to the profile.
  async function applyPendingName() {
    const pending = localStorage.getItem('etl_pending_name');
    if (!pending) return;
    const user = await getUser();
    if (user && !user.user_metadata?.full_name) {
      await client.auth.updateUser({ data: { full_name: pending } });
    }
    localStorage.removeItem('etl_pending_name');
  }

  async function signOut() {
    await client.auth.signOut();
  }

  // ── Progress sync (Supabase table: progress) ──────────────
  // Table columns: user_id uuid, track text, topic_id text, completed_at timestamptz
  // Primary key: (user_id, track, topic_id)
  async function pushProgress(track, topicId) {
    const user = await getUser();
    if (!user) return; // not signed in — localStorage-only, that's fine
    await client.from('progress').upsert({
      user_id: user.id,
      track,
      topic_id: topicId,
      completed_at: new Date().toISOString()
    }, { onConflict: 'user_id,track,topic_id' });
  }

  // Pull all remote progress and merge into localStorage so every
  // device/browser the user signs into stays in sync.
  async function pullAndMergeProgress() {
    const user = await getUser();
    if (!user) return;
    const { data, error } = await client.from('progress').select('track, topic_id').eq('user_id', user.id);
    if (error || !data) return;

    const byTrack = {};
    data.forEach(row => {
      (byTrack[row.track] = byTrack[row.track] || []).push(row.topic_id);
    });

    const keyFor = { networking: 'etl_completed_networking', linux: 'etl_completed_linux', foundation: 'etl_completed_foundation', python: 'etl_completed_python' };
    Object.keys(keyFor).forEach(track => {
      const localKey = keyFor[track];
      let local = [];
      try { local = JSON.parse(localStorage.getItem(localKey) || '[]'); } catch (e) {}
      const remote = byTrack[track] || [];
      const merged = Array.from(new Set([...local, ...remote]));
      localStorage.setItem(localKey, JSON.stringify(merged));

      // Push any locally-completed topics that weren't in Supabase yet
      local.forEach(id => { if (!remote.includes(id)) pushProgress(track, id); });
    });
  }

  window.ETLAuth = {
    client,
    getSession,
    getUser,
    sendMagicLink,
    applyPendingName,
    signOut,
    pushProgress,
    pullAndMergeProgress
  };
})();
