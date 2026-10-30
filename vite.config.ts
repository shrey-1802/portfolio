import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative assets resolution for GitHub Pages deployment
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
