import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tejasvi-ui/',

  plugins: [react()],

  build: {
    outDir: 'dist',
    sourcemap: false,
  },

  server: {
    port: 5173,
    open: true,
  },
})