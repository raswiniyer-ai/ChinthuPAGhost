import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist', assetsDir: 'assets', sourcemap: false, chunkSizeWarningLimit: 1200 },
  server: { port: 5199, host: '127.0.0.1' },
});
