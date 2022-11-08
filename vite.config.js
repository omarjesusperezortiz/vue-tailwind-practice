import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: { outDir: 'docs' },
  publicPath: process.env.NODE_ENV === 'production' ? '/vite-project/' : '/'
})


