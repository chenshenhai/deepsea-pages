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
  server: {
    host: '0.0.0.0',
    port: 8001
  }
};
