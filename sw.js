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
  './topic.html',
  './security.html',
  './css/style.css',
  './js/icon.js',
  './js/nav.js',
  './js/animations.js',
  './js/quiz.js',
  './js/topics-data.js',
  './js/linux-topics-data.js',
  './js/foundation-topics-data.js',
  './js/security-topics-data.js',
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

self.addEventListener('fetch', e => {
  // Never intercept Supabase API calls — always go to network
  if (e.request.url.includes('supabase.co')) return;

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
      if (!resp || resp.status !== 200 || resp.type !== 'basic') return resp;
      const clone = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return resp;
    }))
  );
});
