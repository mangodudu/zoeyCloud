/*
 * @Author: zoey
 * @Date: 2023-11-09 17:35:03
 * @LastEditors: zoey
 * @LastEditTime: 2023-12-21 18:05:51
 * @Description: 请填写简介
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      "assets": path.resolve(__dirname, './src/assets')
    },
  },
  server: {
    proxy: {
      ws: false
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/globalVar.scss";',
      }
    }
  }
})
