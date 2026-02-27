import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'redirect-to-base',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/edc-seoul') {
            res.writeHead(302, { Location: '/edc-seoul/' });
            res.end();
            return;
          }
          next();
        });
      },
    },
  ],
  base: '/edc-seoul/',
  server: {
    port: 3000,
    open: '/edc-seoul/',
  },
});
