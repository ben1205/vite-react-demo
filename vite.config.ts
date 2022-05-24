import { defineConfig } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin({
      'react': 'React',
      'react-dom': 'ReactDOM',
    })
  ],
  server: {
    host: '192.168.9.79',
    port: 8888,
  },
  preview: {
    port: 3000,
  }
})
