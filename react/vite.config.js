import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/darkest-suburbia', // important: makes assets resolve under /blog/
  build: {
    outDir: '../darkest-suburbia', // emit build into repo root /blog folder
    emptyOutDir: true,
  },
});
