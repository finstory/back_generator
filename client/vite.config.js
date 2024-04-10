import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  compilerOptions: {
    baseUrl: "./src",
    paths: {
      "_index.js": ["components/_index.js"]
    }
  },
  resolve: {

    alias: [{ find: '@sass', replacement: path.resolve(__dirname, 'src/assets/sass') },

    { find: '@', replacement: path.resolve(__dirname, './src') },
    ]
  },

})
