import { defineConfig } from "vite"

export default defineConfig({
  // Base path for GitHub Pages deployment
  // Change this to match your repository name
  base: "/",

  // Development server configuration
  server: {
    port: 3000,
    open: true, // Open browser on server start
  },

  // Build configuration
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    sourcemap: false,
    // Improve performance with these settings
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["instant.page"],
        },
      },
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["instant.page"],
  },
})
