import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "",

  server: {
    // proxy: {
    //   '/api': {
    //     target: 'https://discover716-be.onrender.com',
    //     // target: 'http://localhost:3001',
    //     changeOrigin: true
    //   }
    // }
  }
});
