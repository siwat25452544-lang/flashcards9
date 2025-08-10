// v9
const CACHE = 'en-trainer-v9';
self.addEventListener('install', (e)=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=> c.addAll([
    './','./index.html?v=9','./manifest.json','./service-worker.js?v=9',
    './assets/icon-192.png','./assets/icon-512.png','./data/sample.csv','./data/sample.json'
  ])));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys().then(keys=> Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
});
self.addEventListener('fetch', (e)=>{
  if(e.request.method!=='GET') return;
  e.respondWith(
    caches.match(e.request).then(cached=> cached || fetch(e.request).then(resp=>{
      const copy = resp.clone();
      caches.open(CACHE).then(c=> c.put(e.request, copy)).catch(()=>{});
      return resp;
    }).catch(()=> cached))
  );
});
