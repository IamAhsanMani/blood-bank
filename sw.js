const cacheName = 'asan-foundation';
const staticAssets = [
    './',
    './css/style.css',
    './css/index.css',
    './css/donor.css',
    './css/userInfo.css',    
    './css/acceptor.css',
    './pages/userInfo.html',
    './pages/donor.html',
    './pages/acceptor.html',
    './index.html',
    './src/index.js',
    './src/acceptor.js',
    './src/donor.js',
    './src/userInfo.js'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
          console.log('[ServiceWorker] Caching app shell');
          return cache.addAll(staticAssets);
        })
      );
})


self.addEventListener('fetch', function(event) {
event.respondWith(
    caches.open('asan-foundation').then(function(cache) {
    return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
        });
    });
    })
);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req))
    } else {
        event.respondWith(networkFirst(req))
    }
})

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const res = await fetch(req);
        cache.put(req, res.clone())
        return res
    } catch (error) {
        return await cache.match(req)
    }
}