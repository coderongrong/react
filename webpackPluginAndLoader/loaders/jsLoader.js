module.exports = function (source) {



    const result = source.replace(/\.log/g, '.error')


    return result
}