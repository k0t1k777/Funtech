import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: "/Funtech",
  plugins: [
    react(),
    svgr({svgrOptions: {
      // svgrOptions
        }
      })
    ]
})