import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/MaxenceAgullo/', // nom du repo GitHub
  plugins: [react()],
})
