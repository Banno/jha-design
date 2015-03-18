importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function(event) {
  // pre cache a load of stuff:
  event.waitUntil(
    caches.open('banno-static-v3').then(function(cache) {
      return cache.addAll([
        '/',
        '/css/style.min.css',
        '/img/icons.svg',
        '/fonts/proximanova-regular-webfont.woff2',
        '/fonts/proximanova-semibold-webfont.woff2',
        '/fonts/proximanova-bold-webfont.woff2',
        '/fonts/proximanova-light-webfont.woff2'
      ]);
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      console.log(response);
      return response || fetch(event.request);
    })
  );
});
