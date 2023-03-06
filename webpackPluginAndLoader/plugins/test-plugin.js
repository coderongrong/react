const App = require('../src/App') 
console.log('APP ', App())

class TestPlugin {
  options
  constructor(options) {
    // console.log('TestPlugin constructor()')
    this.options = options
  }

  apply(compiler) {
    // console.log('TestPlugin apply()', this.options)

    const onEmit = (compilation, callback) => {
      callback()
    }

    if (compiler.hooks) {
      compiler.hooks.emit.tap('_',
        (compilation) => {
          // console.log('compilation.getStats()', compilation.getStats())
            compilation.assets['copy.js'] = {
              source: function () {
                return `console.log(" --->  copyright.js")
                        console.log(" --->  copyright.js")` // //文件内容
              },
              size: function () {
                return 10 // 文件大小
              },
            }
        }
      )
    } else {
      // compiler.plugin('emit', onEmit)
    }
  }
}

module.exports = TestPlugin
