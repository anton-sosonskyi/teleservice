import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: `/teleservice/`,
  plugins: [svgr(),react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
