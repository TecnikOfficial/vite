import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Base path for GitHub Pages deployment
  base: "/vite/", // Change this if your repository name is different

  // Build configuration
  build: {
    outDir: "dist", // Output directory for the build
    emptyOutDir: true, // Clear the output directory before building
    minify: "terser", // Use Terser for better minification
    sourcemap: false, // Disable sourcemaps for production

    // Rollup options for optimizing chunks and output
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["instant.page"], // Separate vendor libraries into their own chunk
        },
        // Ensure assets are properly referenced
        assetFileNames: "assets/[name].[hash].[ext]", // Naming convention for asset files
        chunkFileNames: "assets/[name].[hash].js", // Naming convention for chunk files
        entryFileNames: "assets/[name].[hash].js", // Naming convention for entry files
      },
    },
  },

  // Server configuration for development
  server: {
    port: 3000, // Port for the development server
    open: true, // Automatically open the browser on server start
    cors: true, // Enable CORS for development
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["instant.page"], // Include specific dependencies for optimization
  },

  // Enable asset optimization for specific file types
  assetsInclude: ["**/*.webp", "**/*.avif", "**/*.webm", "**/*.svg", "**/*.gif"],

  // Resolve paths for easier imports
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Alias for the src directory
    },
  },

  // Log level for build and server
  logLevel: "info", // Set log level to info for better visibility
});
