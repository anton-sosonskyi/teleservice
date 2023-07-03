import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/teleservice/",
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
