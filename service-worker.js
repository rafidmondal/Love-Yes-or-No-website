const CACHE_NAME = 'love-yes-or-no-v1';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Network-first/pass-through: preserves the existing app's live behavior
// without forcing stale HTML, ads, or third-party resources into a cache.
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
