import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/TaskManager/', // Replace 'TaskManager' with your actual repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})