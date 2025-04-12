import { defineConfig } from "vite"

export default defineConfig({
  // Base path for deployment
  // If your repo is username.github.io, use '/'
  // If your repo is username.github.io/repo-name, use '/repo-name/'
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
