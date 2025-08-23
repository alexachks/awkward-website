// Simple Service Worker for caching external resources
const CACHE_NAME = 'awkward-media-v1';
const urlsToCache = [
  'https://img.youtube.com/vi/NBYvS_w6yMQ/maxresdefault.jpg',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch(() => {}) // Fail silently
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Only cache external images and fonts
  if (event.request.url.includes('img.youtube.com') || 
      event.request.url.includes('logo.clearbit.com') ||
      event.request.url.includes('fonts.googleapis.com')) {
    
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(event.request).then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          }).catch(() => response); // Return cached version on network failure
        })
    );
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});