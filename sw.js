const CACHE = "edena-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./favourites.html",
  "./style.css"
];

// Install
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

// Fetch
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
