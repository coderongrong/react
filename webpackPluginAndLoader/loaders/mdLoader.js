module.exports = function (source) {

    // const result = source.replace('vue', 'vue').replace(/<template>(.*)<\/template>/, '$1').replace(/template/g, '')

    // console.log('source', source, this.zhuoxin)
    // const result = source.replace(/(<div(?:(?!<\/div>).|\n)*?<\/div>)/gm, '$1')
    const result = source.replace(/\((.+)\)/gm, '$1' + '')
    var obj = '{a: 1, b: 2}'
    // this.query.preprocessor('xxxxxxxxx', 'yyyyyyyyyyyy')
    return `export default () => '${obj}'`
}