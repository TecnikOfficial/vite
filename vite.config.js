import { defineConfig } from "vite"

export default defineConfig({
  // Base path for GitHub Pages deployment
  base: "/",

  // Development server configuration
  server: {
    port: 3000,
    open: true,
  },

  // Build configuration
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    sourcemap: false,
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["src/modules/yearTimer.js", "src/modules/textSlider.js"],
          ui: ["src/modules/overlays.js", "src/modules/notifications.js"],
          interactions: [
            "src/modules/heartEffects.js",
            "src/modules/drawing.js",
            "src/modules/clipboard.js",
            "src/modules/donation.js",
          ],
        },
      },
    },
  },
})
