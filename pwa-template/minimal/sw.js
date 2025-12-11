const CACHE_NAME = "pwa-cache-v1";
const FILES_TO_CACHE = [
    "index.html",
    "manifest.json",
    "icons/icon-192x192.png",
    "icons/icon-512x512.png"
];

// Install SW and cache basic files
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

// Serve from cache when offline
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
