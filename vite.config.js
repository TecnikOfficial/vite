import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  // Base path specifically for TecnikOfficial/vite repository
  base: "/vite/",

  // Build configuration
  build: {
    outDir: "dist", // Output directory
    emptyOutDir: true, // Empty the output directory before building
    minify: "terser", // Use terser for better minification
    sourcemap: false, // Disable sourcemaps for production
  },

  // Server configuration for development
  server: {
    port: 3000,
    open: true, // Open browser on server start
    cors: true, // Enable CORS
  },

  // Resolve paths
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
