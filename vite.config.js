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
  },
})
