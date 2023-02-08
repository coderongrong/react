const path = require("path")
const addPath = dir => path.join(__dirname, dir);
const px2rem = require("postcss-px2rem-exclude");
console.log('----->  webpack')

module.exports = {
    webpack: {
        alias: {
            "@": addPath("src")
        }
    },
    style: {
        postcss: {
            plugins: [
                px2rem({
                    remUnit: 37.5,
                    exclude: /node-modules/i
                })
            ]
        }
    },
    devServer: {
        open: false,
        proxy: {
            "jeecg-boot": {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    "^jeecg-boot": "jeecg-boot"
                }
            },
        }
    }
}