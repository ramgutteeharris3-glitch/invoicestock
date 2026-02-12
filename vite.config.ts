import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      input: './index.html',
      output: {
        manualChunks: {
          'vendor-xlsx': ['xlsx'],
          'vendor-react': ['react', 'react-dom'],
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});