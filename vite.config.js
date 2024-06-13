import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/WEather-Application/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
