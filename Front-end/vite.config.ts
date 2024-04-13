import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 85
      },
      jpeg: {
        quality: 85
      },
      jpg: {
        quality: 85
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname),
      '@assets': resolve(__dirname, 'src/assets/'),
      '@components': resolve(__dirname, 'src/components/'),
      '@common': resolve(__dirname, 'src/common/'),
      '@container': resolve(__dirname, 'src/container/'),
      '@icons': resolve(__dirname, 'src/icons/'),
      '@ui': resolve(__dirname, 'src/ui/'),
      '@routes': resolve(__dirname, 'src/routes/routes.ts')
    }
  }
});
