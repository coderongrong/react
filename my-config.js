/** @type {import('vite').UserConfig} */

import { fileURLToPath, URL } from 'node:url'
// import { someMethod } from 'my-dep'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'

import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
// var dotenv = require('dotenv')
// var dotenvExpand = require('dotenv-expand')

// var myEnv = dotenv.config()
// dotenvExpand.expand(myEnv)

// console.log('>>>>>>>>>>  ,env', process.env)

// https://vitejs.dev/config/
// export default defineConfig({
//   runtimeCompiler: true,  // 加上这一段
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   build: {
//     commonjsOptions: {
//       include: [/linked-dep/, /node_modules/]
//     }
//   },
// })

function asyncFunction() {
  return new Promise((res, rej) => {
    res('100')
  })
}

export default defineConfig(async ({ command, mode, ssrBuild }) => {
  const data = await asyncFunction()
  const env = loadEnv(mode, process.cwd(), '')
  console.log('mode', mode)
  if (command === 'serve') {
    console.log('serve')
    return {
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
      },
      transform() {
        console.log('-------> transform() {},')
      },
      // base: '/vite/',
      // dev 独有配置
      runtimeCompiler: true, // 加上这一段
      plugins: [
        { enforce: 'pre' },
        vue({
          reactivityTransform: true,
        }),
        splitVendorChunkPlugin(),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
      ],
      envPrefix: 'APP_',
      // publicDir: false,
      css: {
        loaderOptions: {
          less: {
            lessOptions: {
              javascriptEnabled: true,
              math: 'always',
            },
          },
        },
      },
      module: {
        rules: [
          {
            test: /\.md$/,
            use: [
              {
                loader: resolve(__dirname, 'loaders/fileLoader.js')
              }
            ],
          },
        ],
      },
      clearScreen: true,
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
          '@com': fileURLToPath(new URL('./src/components', import.meta.url)),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      },
      define: {
        __APP_ENV__: env.APP_ENV,
      },
      build: {
        rollupOptions: {
          // input: {
          //     main: resolve(__dirname, 'index.html'),
          //     nested: resolve(__dirname, 'nested/index.html')
          // }
        },
        commonjsOptions: {
          include: [/linked-dep/, /node_modules/],
        },
        modulePreload: {
          resolveDependencies: (filename, deps, { hostId, hostType }) => {
            // console.log('>>>>>>>  fliename', filename, deps)
            return deps.filter(condition)
          },
        },
        // cssCodeSplit: true,
        watch: {},
      },
      sourcemap: true,
      server: {
        open: false,
        port: 9000,
        proxy: {
          '/jeecg-boot': {
            // target: 'http://misaya.wicp.net',  // 石家庄测试环境和朝阳本地
            // target: 'http://39.98.118.21',  // 正式环境
            target: 'http://192.168.1.222:1008', // 智友本地
            changeOrigin: true, //是否跨域
            pathRewrite: {
              '^/jeecg-boot': '',
            },
          },
          '/sys': {
            // target: 'http://misaya.wicp.net',  // 石家庄测试环境和朝阳本地
            // target: 'http://39.98.118.21',  // 正式环境
            target: 'http://192.168.1.222:1008/jeecg-boot', // 智友本地
            changeOrigin: true, //是否跨域
            rewrite: (path) => path.replace(/^\/sys/, '/sys'),
          },
        },
      },
    }
  } else {
    // command === 'build'
    console.log("command === 'build'", command)
    return {
      // build 独有配置
      rollupOptions: {
        // input: {
        //     main: resolve(__dirname, 'index.html'),
        //     nested: resolve(__dirname, 'nested/index.html')
        // }
      },
      commonjsOptions: {
        include: [/linked-dep/, /node_modules/],
      },
      cssCodeSplit: false,
      sourcemap: true,
      watch: {},
    }
  }
})
