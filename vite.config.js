import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Separate vendor libraries so browsers can cache them independently
    // Vite 8 (rolldown) requires manualChunks as a function
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-helmet-async') || id.includes('react-side-effect') || id.includes('react-fast-compare') || id.includes('invariant') || id.includes('shallowequal')) {
            return 'helmet-vendor';
          }
          if (id.includes('react-router') || id.includes('@remix-run')) {
            return 'router-vendor';
          }
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/scheduler/')) {
            return 'react-vendor';
          }
        },
      },
    },
    // Target modern browsers for smaller, faster output
    target: 'es2020',
    // Warn when chunks exceed 600 kB
    chunkSizeWarningLimit: 600,
  },
  // Ensure proper MIME types for assets
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp'],
})


