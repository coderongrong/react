class FileNamePlugin {
    options
    constructor(options) {
        this.options = options
    }
    apply(compiler) {
        if (compiler.hooks) {
            compiler.hooks.emit.tap('xxx', (compilation) => {
                compilation.assets['file.js'] = {
                    source: function () {
                        return 'console.log("卓信通信")'
                    },
                    size: function () {
                        return 10
                    },
                }
            })
        }
    }
}

module.exports = FileNamePlugin
