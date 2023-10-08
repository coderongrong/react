const path = require('path')
const addPath = (dir) => path.join(__dirname, dir)
const px2rem = require('postcss-px2rem-exclude')

const yearsInMs = require('./executable-file.js')
console.log('----->  webpack', yearsInMs)

module.exports = {
    webpack: {
        alias: {
            '@': addPath('src'),
        },
    },
    style: {
        postcss: {
            plugins: [
                px2rem({
                    remUnit: 37.5,
                    exclude: /node-modules/i,
                }),
            ],
        },
    },
    devServer: {
        open: true,
        // proxy: {
        //     "jeecg-boot": {
        //         target: 'http://localhostRoue0707:3000',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             "^jeecg-boot": "jeecg-boot"
        //         }
        //     },
        // }
    },
    module: {
        rules: [
            {
                test: /\.vsc$/,
                use: [
                    {
                        loader: path.resolve(__dirname, './vueLoader.js'),
                        options: { name: 'Administrator' },
                    },
                ],
            },
            {
                test: /\.(json)$/i,
                rules: [
                    {
                        loader: 'val-loader',
                        options: {
                            executableFile: path.resolve(
                                __dirname,
                                'fixtures',
                                'executableFile.js'
                            ),
                        },
                    },
                ],
            },
            {
                test: /\.json$/i,
                type: 'asset/resource',
            },
        ],
    },
}
