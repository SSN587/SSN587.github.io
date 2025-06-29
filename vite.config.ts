import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    allowedHosts: [
      'd4d4a2851f68a86bc6cf21659fa48faf.serveo.net',
      '.serveo.net' // your domain
    ]
  }
})