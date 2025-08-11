
// v15
const CACHE='en-trainer-v15';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(async c => {
      try {
        await c.addAll(['./','./index.html?v=15','./manifest.json','./service-worker.js?v=15','./icon-192.png','./icon-512.png']);
      } catch (err) {
        // ignore cache add errors (e.g., offline or 404)
      }
    })
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))),
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  // Network-first for HTML
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./index.html?v=15')));
    return;
  }
  // Cache-first for others
  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }).catch(() => cached))
  );
});
