// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// https://vite.dev/config/
//export default defineConfig({
  //plugins: [react()],
//})


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // CHANGE 1: add this import

export default defineConfig({
  plugins: [react(), tailwindcss()], // CHANGE 2: add tailwindcss() here
  server: {
    port: 5173,
    proxy: { "/api": "http://localhost:4000" }, // CHANGE 3: forward /api to the server
  },
});
