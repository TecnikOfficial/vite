import { defineConfig } from 'vite';

export default defineConfig({
  base: '/vite/',
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: []
        }
      }
    }
  }
});