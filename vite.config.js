// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Time-Tracking-Dashboard', // Zorgt ervoor dat assets relatief worden geladen
  plugins: [tailwindcss()],
})
