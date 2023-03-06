const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const TestPlugin = require('./plugins/test-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FileNamePlugin = require('./plugins/fileName-plugin')

module.exports = {
    // watch: true,
    mode: 'development',
    entry: { main: './src/index.js' },
    resolveLoader: { modules: ['node_modules', './loaders'] },
    output: { path: resolve(__dirname, 'dist'), filename: '[name].js' },
    // externals: [
    //     {
    //         // 字符串
    //         react: 'react',
    //         // 对象
    //         lodash: {
    //             commonjs: 'lodash',
    //             amd: 'lodash',
    //             root: '_', // indicates global variable
    //         },
    //         // 字符串数组
    //         subtract: ['./math', 'subtract'],
    //     },
    // ],
    loader: {
        answer: 42,
        zhuoxin: '卓信',
    },
    name: 'admin-app',
    // stats: {
    //     colors: {
    //         red: 'red'
    //     },
    //     logging: 'verbose'
    // },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: resolve(
                            __dirname,
                            './loaders/vueLoader.js'
                        ),
                        options: { name: 'Administrator' },
                    },
                ],
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: resolve(__dirname, 'loaders/mdLoader.js'),
                        options: {
                            name: 'Administrator--md',
                            preprocessor: (content, loaderContext) => {
                                let result
                                // console.log(
                                //     '-----> webpack',
                                //     content,
                                //     loaderContext
                                // )
                                // try {
                                //   result = posthtml().use(plugin).process(content, { sync: true });
                                // } catch (error) {
                                //   loaderContext.emitError(error);

                                //   return content;
                                // }

                                // return result.html;
                            },
                        },
                    },
                ],
            },
            {
                test: /App\.js$/,
                use: [
                    {
                        loader: resolve(__dirname, 'loaders/jsLoader.js'),
                        options: {
                            zhuoxin: '卓信',
                        },
                    },
                ],
            },
            // {
            //     test: /index\.html$/,
            //     use: [
            //         {
            //             loader: resolve(__dirname, './loaders/indexHtmlLoader.js'),
            //             options: {
            //                 zhuoxin: 'file',
            //             },
            //         },
            //     ],
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            // Definitions...
            ABC: 'arston',
            'process.env.NODE_ENVs': "'production'",
        }),
        new FileNamePlugin(),
        new TestPlugin({ name: '卓信通信' }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        // minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.js(\?.*)?$/i,
            }),
        ],
    },
    devServer: {
        open: false,
        port: 9000,
    },
}

//https://www.ngui.cc/el/1498626.html
// module.exports = {
//     mode: 'development',
//     entry: { main: './src/index.js' },
//     output: { path: resolve(__dirname, 'dist'), filename: '[name].js' },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 use: [
//                     {
//                         loader: resolve(
//                             __dirname,
//                             './loaders/replaceLoader.js'
//                         ),
//                         options: { name: 'Administrator' },
//                     },
//                 ],
//             }
//         ],
//     },
// }
