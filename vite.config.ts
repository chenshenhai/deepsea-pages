import path from 'node:path';  
import pluginReact from '@vitejs/plugin-react';
// import type { Request, Response, NextFunction } from 'express';
 
function resolve(pathName: string) {
  return path.join(__dirname,   pathName);
}

export default {
  plugins: [pluginReact()],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@antd': resolve('node_modules/antd'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'lib/react': ['react', 'react-dom'],
          'lib/antd': ['antd'], 
        },
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: '[ext]/[name].[hash].[ext]',
        chunkFileNames: () => {
          // const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : [];
          // const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]';
          return `js/[name].[hash].js`;
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8001
  }
};
