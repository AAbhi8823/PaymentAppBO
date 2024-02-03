import * as path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{open:true, port:6900},
  resolve:{
    alias:{
      "@app": path.resolve(__dirname, "src")
    }
  }
})
