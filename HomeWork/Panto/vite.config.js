import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// Tailwind Css
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // very important to expose for ngrok
    allowedHosts: [
      '9987-2409-40c1-302e-6ca7-90a3-e431-95ba-7567.ngrok-free.app'  // add your ngrok domain here
    ]
  }
})
