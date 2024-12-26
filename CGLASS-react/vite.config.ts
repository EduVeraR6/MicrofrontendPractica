import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { federationConfig } from './src/Federation.config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation(federationConfig),
],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})