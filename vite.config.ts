import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: set VITE_BASE_PATH to your repo name, e.g.:
//   VITE_BASE_PATH=/portfolio/ npm run build
// For Vercel / custom domain: leave unset (defaults to '/')
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
})
