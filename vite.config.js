import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  runtimeCompiler: true,  // 加上这一段
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/]
    }
  },
  // devServer: {
  //   open: true,
  //   hotOnly: true, // 是否热更新
  //   port: 8080,
  //   proxy: {
  //     /* '/api': {
  //        target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro/&id=MIA9409', //mock API接口系统
  //        target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro/&id=Mipy-1', //mock API接口系统
  //        ws: false,
  //        changeOrigin: true,
  //        pathRewrite: {
  //          '/jeecg-boot': ''  //默认所有请求都加了jeecg-boot前缀，需要去掉
  //        }
  //      }, */
  //     // '/jeecg-boot': {
  //     //   target: 'http://39.98.118.21', // 服务器
  //     //   ws: false,
  //     //   changeOrigin: true
  //     // }
  //     '/jeecg-boot': {
  //       target: 'http://39.98.118.21', // 朝阳本地
  //       ws: false,
  //       changeOrigin: true
  //     }
  // '/jeecg-boot': {
    //       target: 'http://39.98.118.21', // 朝阳本地
    //       ws: false,
    //       changeOrigin: true
    //     }
  //   }
  // },
})

/**
 * 862405040@qq.com
 * 20RRqw1571
 * 
*/