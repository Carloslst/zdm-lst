/*eslint-disable */
// visualizer使用有点问题，但是能正常使用，所以加了eslint-disable注释

import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { visualizer } from "rollup-plugin-visualizer";

// @ts-ignore
// https://vitejs.dev/config/
export default defineConfig (({ mode }) => ({
  plugins: [
    vue(),
    vueJsx(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [
        path.resolve(process.cwd(), "./src/assets/svg"),
        path.resolve(
          __dirname,
          "../packages/editor/src/config-cmps-assets/svg-icon",
        ),
      ],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
    visualizer({
      open: mode === "production" ? false : true, //注意这里要设置为true，否则无效
      filename: "stats.html", //分析图生成的文件名
      gzipSize: true, // 收集 gzip 大小并将其显示
      brotliSize: true, // 收集 brotli 大小并将其显示
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.vue'],
  },
  build: {
    sourcemap: false, // 需要在生产环境对代码进行调试，那么这个配置是必要的,否则不需要打开
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // 降低了打包代码的并行
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          elementPlus: ['element-plus'],
          echarts: ['echarts'],
        },
      },
    },
  },
  esbuild: {
    // TODO: 测试
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
}));
