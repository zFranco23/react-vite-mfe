import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001
  },
  plugins: [
    react(),
    federation({
      name: 'remote-react',
      filename: 'remoteEntry.js',
      exposes: {
        './number-changer': './src/components/number-changer.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
})
