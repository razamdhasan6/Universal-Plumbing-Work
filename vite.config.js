import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' && process.env.VERCEL === undefined
    ? '/Universal-Plumbing-Work/' // GitHub Pages base URL
    : '/', // Default for Vercel and local environments
})
