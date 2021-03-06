import { defineConfig } from "vite";
import { resolve } from "path";
import vue from '@vitejs/plugin-vue';
function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig({
  base: "",
  plugins:[vue()],
  resolve: {
    alias: {
      "/@": pathResolve("src"),
    }
  },
  optimizeDeps: {
    // include: ['axios'],
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser' // 混淆器
  },
  server: {
    port: 8080
    // cors: true,
    // open: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.99.223:3000',   //代理接口
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
});
