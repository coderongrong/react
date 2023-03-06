module.exports = function (source) {



    const result = source.replace(/<!-- file.js -->/, '<script src="file.js"></script>')

    console.log('------->', `JSON.parse(${result})`)


    return `export default () => '${result}'`
}