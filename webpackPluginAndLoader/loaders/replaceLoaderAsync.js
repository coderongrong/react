const loaderUtils = require('loader-utils')
// import loaderUtils from 'loader-utils'

module.exports = function (source) {

    // console.log('3')

    const options = loaderUtils.getOptions(this)
    
    const callback = this.async()
    setTimeout(() => {
        const result = source.replace('hello', 'hello ' + options.name)
        callback(null, result)
    }, 500)
    // this.callback(null, result, source)
}