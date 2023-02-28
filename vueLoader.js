module.exports = function (source) {

    console.log('----------> module ', source)

    return source.replace('vue', 'vue')
}