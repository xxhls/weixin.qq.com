import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/weixin.qq.com/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@styles': '/src/styles',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "@styles/variables.scss";@import "@styles/common.scss";',
      },
    },
  },
})
