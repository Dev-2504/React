import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   server: {
    host: true, // very important to expose for ngrok
    allowedHosts: [
      '17da-2409-40c1-31c5-45b9-84ae-eb11-98a4-9393.ngrok-free.app'  // add your ngrok domain here
    ]
  }
})
