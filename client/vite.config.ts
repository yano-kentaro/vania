import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  server: {
    host: '0.0.0.0'
  },
  build: {
    outDir: '../public'
  },
  plugins: [react()]
})
