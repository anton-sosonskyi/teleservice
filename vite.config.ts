import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/teleservice/",
  plugins: [svgr(), tsconfigPaths(), react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});


