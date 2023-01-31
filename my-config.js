/** @type {import('vite').UserConfig} */

import { fileURLToPath, URL } from 'node:url'
// import { someMethod } from 'my-dep'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from 'path'

import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

console.log(resolve(__dirname, 'index.html'))


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
        return {
            base: '/vite/',
            // dev 独有配置
            runtimeCompiler: true,  // 加上这一段
            plugins: [
                { enforce: 'pre' },
                vue({
                    reactivityTransform: true
                }),
                splitVendorChunkPlugin(),
                legacy({
                    targets: ['defaults', 'not IE 11']
                })
            ],
            resolve: {
                alias: {
                    '@': fileURLToPath(new URL('./src', import.meta.url)),
                    '@com': fileURLToPath(new URL('./src/components', import.meta.url)),
                }
            },
            define: {
                __APP_ENV__: env.APP_ENV
            },
            build: {
                rollupOptions: {
                    // input: {
                    //     main: resolve(__dirname, 'index.html'),
                    //     nested: resolve(__dirname, 'nested/index.html')
                    // }
                },
                commonjsOptions: {
                    include: [/linked-dep/, /node_modules/]
                },
                watch: {

                }
            },
            server: {
                proxy: {
                    '/api': {
                        // https://jsonplaceholder.typicode.com/todos/1
                        target: 'http://jsonplaceholder.typicode.com',
                        changeOrigin: true,
                        rewrite: (path) => path.replace(/^\/api/, '')
                    },
                }
            }
        }
    } else {
        // command === 'build'
        return {
            // build 独有配置
            rollupOptions: {
                // input: {
                //     main: resolve(__dirname, 'index.html'),
                //     nested: resolve(__dirname, 'nested/index.html')
                // }
            },
            commonjsOptions: {
                include: [/linked-dep/, /node_modules/]
            },
            watch: {

            }
        }
    }
})