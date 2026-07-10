// EasyToLearn — Supabase Auth + Progress Sync
// Shared by login.html, dashboard.html, topic.html, and nav.js
(function () {
  if (typeof window.supabase === 'undefined') {
    console.error('Supabase library not loaded. Check your internet connection.');
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
  async function sendMagicLink(email, name) {
    if (name) localStorage.setItem('etl_pending_name', name);
    const redirectTo = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + 'login.html';
    const { error } = await client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo, shouldCreateUser: true, data: name ? { full_name: name } : undefined }
    });
    return { error };
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

    const keyFor = { networking: 'etl_completed_networking', linux: 'etl_completed_linux', foundation: 'etl_completed_foundation' };
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
