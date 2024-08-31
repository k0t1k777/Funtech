import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  base: './',
  plugins: [react(), svgr({ svgrOptions: {} }), envCompatible()],
  resolve: {
    alias: {
      src: '/src/',
    },
  },
});
