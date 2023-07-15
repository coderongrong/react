/** @type {import('vite').UserConfig} */

import { fileURLToPath, URL } from 'node:url'
// import { someMethod } from 'my-dep'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'
import fs from 'fs'
import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// import { consoles, printLoader } from 'make-loader'

import { consoles } from './plugins/console'

var files = ''
const handleAysnc = async () => {
  return new Promise((res) => {
    fs.readFile('./src/_main.js', 'utf8', (err, data) => {
      files = data
      res()
    })
  })
}

export default defineConfig(async ({ command, mode, ssrBuild }) => {
  await handleAysnc()
  const env = loadEnv(mode, process.cwd(), 'APP_')
  // return
  if (command === 'serve') {
    console.log('serve')
    return {
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
      },
      transform() {
        // console.log('-------> transform() {},')
      },
      runtimeCompiler: true, // 加上这一段
      plugins: [
        vue({
          reactivityTransform: true,
        }),

        splitVendorChunkPlugin(),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
        // {
        //   ...consoles({ color: 'red'}, files),
        //   enforce: 'pre'
        // },
        {
          ...consoles({ color: 'red' }, files),
          enforce: 'pre',
        },
        // AutoImport({
        //   eslintrc: {
        //     enabled: false, // 若没此json文件，先开启，生成后在关闭
        //     filepath: './.eslintrc-auto-import.json', // 设置eslintrc-auto-import.json生成路径 Default `./.eslintrc-auto-import.json`
        //     globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        //   },
        //   imports: ['vue', 'vue-router', 'pinia'],
        //   // dirs: [`${new URL('./src/stores/counte.js', import.meta.url)}`], // new URL('./src/stores/counte.js', import.meta.url)
        //   dts: './src/auto-imports.d.ts',
        // }),
      ],
      envPrefix: 'VITE_',
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
                loader: resolve(__dirname, 'loaders/fileLoader.js'),
              },
            ],
          },
        ],
      },
      clearScreen: true,
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('src', import.meta.url)),
          '@com': fileURLToPath(new URL('src/components', import.meta.url)),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      },
      define: {
        __APP_ENV__: env.APP_ENV,
      },
      build: {
        rollupOptions: {
          // input: {
          //     main: resolve(__dirname, 'index.html'),  // X931019Y
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
          '/goods': {
            target: 'http://42.192.39.253:8083',
            changeOrigin: true, //是否跨域
            rewrite: (path) => path.replace(/^\/goods/, ''),
          },
          '/sys': {
            target: 'http://192.168.1.222:1008/jeecg-boot', // 智友本地
            changeOrigin: true, //是否跨域
            rewrite: (path) => path.replace(/^\/sys/, '/sys'),
          },
        },
      },
    }
  } else {
    // command === 'build'
    // console.log("command === 'build'", command)
    return {
      // runtimeCompiler: true, // 加上这一段
      // plugins: [vue()],
      // resolve: {
      //   alias: {
      //     '@': fileURLToPath(new URL('./src', import.meta.url)),
      //   },
      // },
      // build: {
      //   commonjsOptions: {
      //     include: [/linked-dep/, /node_modules/],
      //   },
      // },
      runtimeCompiler: true, // 加上这一段
      plugins: [
        vue({
          reactivityTransform: true,
        }),

        splitVendorChunkPlugin(),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
        // {
        //   ...consoles({ color: 'red'}, files),
        //   enforce: 'pre'
        // },
        {
          ...consoles({ color: 'red' }, files),
          enforce: 'pre',
        },
        AutoImport({
          eslintrc: {
            enabled: true, // 若没此json文件，先开启，生成后在关闭
            filepath: './.eslintrc-auto-import.json', // 设置eslintrc-auto-import.json生成路径 Default `./.eslintrc-auto-import.json`
            globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
          },
          imports: ['vue', 'vue-router', 'pinia'],
          // dirs: [`${new URL('./src/stores/counte.js', import.meta.url)}`], // new URL('./src/stores/counte.js', import.meta.url)
          dts: './src/auto-imports.d.ts',
        }),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
      build: {
        commonjsOptions: {
          include: [/linked-dep/, /node_modules/],
        },
      },
    }
  }
})
