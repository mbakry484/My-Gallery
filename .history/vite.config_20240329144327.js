import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory as 'build'
    base:"/My-Gallery/", // Specify the base
  },
});
