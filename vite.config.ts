import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/shared/locales', // Откуда копируем
          dest: 'static', // Куда копируем в папке сборки
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
