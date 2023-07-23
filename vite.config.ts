import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'time-management-tools',
  resolve: {
    alias: {
      '@features': '/src/features',
    }
  },
  plugins: [react()],
  server: {
    port: 3000
  }
})
