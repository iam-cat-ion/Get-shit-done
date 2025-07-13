self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('getshitdone-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/quest.html',
        '/style.css',
        '/script.js',
        '/Untitled44_20250713123604.png',
        '/Untitled45_20250713124143.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

