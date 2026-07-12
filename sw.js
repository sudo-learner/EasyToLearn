// EasyToLearn — Service Worker
// Caches all site files so the app works offline after first load.
const CACHE = 'easytolearn-v4';
const ASSETS = [
  './',
  './index.html',
  './login.html',
  './dashboard.html',
  './foundation.html',
  './networking.html',
  './linux.html',
  './python.html',
  './topic.html',
  './css/style.css',
  './js/icon.js',
  './js/nav.js',
  './js/animations.js',
  './js/quiz.js',
  './js/topics-data.js',
  './js/linux-topics-data.js',
  './js/foundation-topics-data.js',
  './js/python-topics-data.js',
  './js/supabase-config.js',
  './js/auth.js',
  './assets/icon.png',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Let the page force an already-open tab onto the new worker immediately
// (mobile "Add to Home Screen" installs are notoriously slow to pick up
// service worker updates on their own — this gives them a fast path).
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);

  // Only ever cache same-origin GET requests for our own site files.
  // Anything else — API calls (Supabase auth/data), any POST/PUT/DELETE,
  // and every cross-origin request (fonts, the Supabase JS CDN script,
  // etc.) — is left completely alone and goes straight to the network,
  // exactly as if this service worker didn't exist. This matters a lot
  // for the login flow: intercepting a cross-origin POST (even to just
  // inspect/re-fetch it) is what causes "Failed to fetch" errors on some
  // mobile browsers, since request bodies can't always be safely reused.
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      if (!resp || resp.status !== 200 || resp.type !== 'basic') return resp;
      const clone = resp.clone();
      caches.open(CACHE).then(c => c.put(req, clone));
      return resp;
    }))
  );
});
