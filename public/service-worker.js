// Service Worker for caching and offline support
const CACHE_NAME = "tecnik-site-cache-v1"
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/main.js",
  "/assets/style.css",
  "https://tecnik.pages.dev/assets/media/video.webm",
  "https://tecnik.pages.dev/assets/media/tecnikmain4.avif",
  "https://tecnik.pages.dev/assets/media/donate.webp",
  "https://tecnik.pages.dev/assets/media/noti.webp",
  "https://tecnik.pages.dev/assets/media/heart.gif",
  "https://tecnik.pages.dev/assets/media/GITHUB-white.svg",
  "https://play.vsthemes.org/t-cursors/12251/25a255ea88403b8c79e2bb1b03efd2a5.webp",
  "https://play.vsthemes.org/t-cursors/12251/b455a062e7b24797cc26a84981f31797.webp",
]

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Fetch event - serve from cache if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
