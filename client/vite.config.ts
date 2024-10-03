import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@services': '/src/services',
      '@contexts': '/src/contexts',
      '@types': '/src/types',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
    }
  }
})
