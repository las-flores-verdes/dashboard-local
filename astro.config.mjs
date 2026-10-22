// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://las-flores-verdes.github.io',
  base: process.env.BASE_PATH || '/dashboard-local',
  output: 'static',
  build: {
    assets: '_astro',
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['@ops-dss/charts'],
    },
  },
  integrations: [react(), icon()],
})
