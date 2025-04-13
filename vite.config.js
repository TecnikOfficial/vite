import { defineConfig } from "vite"

export default defineConfig({
  // Base path for GitHub Pages
  // Use empty string for root deployment or '/repo-name/' for project deployment
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

  // Optimize dependencies
  optimizeDeps: {
    include: ["instant.page"],
  },

  // Enable asset optimization
  assetsInclude: ["**/*.webp", "**/*.avif", "**/*.webm", "**/*.svg", "**/*.gif"],
})
