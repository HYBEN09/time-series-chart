import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
});
