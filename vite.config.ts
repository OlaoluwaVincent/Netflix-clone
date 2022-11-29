import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  server: {
    // proxy:{
    //   '/vidoes': {
    //     target: 'https://www.youtube.com',
    //     changeOrigin: true,
    //   }
    // },
    cors:{
      // origin: 'http://localhost:5173/',
      origin: "*",
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  }
})
