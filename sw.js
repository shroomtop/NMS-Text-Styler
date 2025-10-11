/* Lightweight offline cache for GitHub Pages (optional) */
const CACHE = "nms-text-styler-v1";
const ASSETS = [
  "../index.html",
  "../favicon.svg",
  "./manifest.webmanifest"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", e => {
  const { request } = e;
  if (new URL(request.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(request).then(
      hit => hit || fetch(request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(request, copy));
        return res;
      }).catch(() => caches.match("../index.html"))
    )
  );
});
