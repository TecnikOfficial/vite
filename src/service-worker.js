// Service Worker for offline functionality and caching
const CACHE_NAME = "tecnik-site-cache-v1"
const urlsToCache = [
  "/",
  "/index.html",
  "/src/style.css",
  "/src/main.js",
  "https://tecnik.pages.dev/assets/media/favicon.webp",
  "https://tecnik.pages.dev/assets/media/tecnikmain4.avif",
  "https://tecnik.pages.dev/assets/media/donate.webp",
  "https://tecnik.pages.dev/assets/media/noti.webp",
  "https://tecnik.pages.dev/assets/media/heart.gif",
  "https://tecnik.pages.dev/assets/media/GITHUB-white.svg",
  "https://tecnik.pages.dev/assets/media/video.webm",
  "https://instant.page/5.2.0",
]

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache")
        return cache.addAll(urlsToCache)
      })
      .catch((error) => {
        console.error("Cache installation failed:", error)
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

// Fetch event - serve from cache or network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response
        }

        // Clone the request because it's a one-time use stream
        const fetchRequest = event.request.clone()

        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // Clone the response because it's a one-time use stream
          const responseToCache = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            // Don't cache third-party resources that might cause CORS issues
            if (event.request.url.startsWith(self.location.origin) || event.request.url.includes("tecnik.pages.dev")) {
              cache.put(event.request, responseToCache)
            }
          })

          return response
        })
      })
      .catch((error) => {
        console.error("Fetch failed:", error)
        // You can return a custom offline page here
      }),
  )
})
