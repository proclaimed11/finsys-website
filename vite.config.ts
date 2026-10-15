import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//===added this image optimizer pluggin
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    //====added image quality optimizers
     ViteImageOptimizer({
      png: { quality: 78 },
      jpeg: { quality: 78 },
      jpg: { quality: 78 },
      webp: { quality: 78, lossless: false },
      avif: { quality: 65 },
      // only re-optimize when the source changes; speeds up rebuilds
      cache: true,
      cacheLocation: 'node_modules/.cache/vite-plugin-image-optimizer',
    }),
  ],
})
