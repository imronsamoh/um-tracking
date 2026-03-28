// Service Worker - UM Tracking Status PWA
var CACHE_NAME = 'um-tracking-v1';

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  // ไม่ cache อะไร แค่ให้ PWA detect ว่ามี service worker
  event.respondWith(fetch(event.request));
});
