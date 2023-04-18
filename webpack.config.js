const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";

console.log('entry')

module.exports = {
    mode: 'development',
    entry: './src/main.js',

    output: {
        path: resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    externals: {
        jquery: 'jQuery',
        lodash: 'lodash',
        Vue: 'vue',
    },
    // externals: [
    //     function ({ context, request }, callback) {
    //         // console.log('request>>>>>>>>>', request)
    //         if (/^jquery$/.test(request)) {
    //             // 使用 request 路径，将一个 commonjs 模块外部化
    //             return callback(null, 'commonjs ' + request);
    //         }
    //         // 继续下一步且不外部化引用
    //         callback();
    //     },
    // ],
    devtool: 'source-map',
    plugins: [
        new StylelintPlugin({
            config: { rules: "color-no-invalid-hex" },
            files: "all/my/stylesheets/*.css"
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public/index.html')
        }),
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css",
        }),
        new VueLoaderPlugin(),
        new LodashModuleReplacementPlugin(),
    ],
    resolve: {
        alias: {
            '@': resolve('src')
        },
    },
    devServer: {
        open: false,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    "postcss-loader",
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        chunkIds: 'named',
        innerGraph: true,
        removeEmptyChunks: true,
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "chunk",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
}