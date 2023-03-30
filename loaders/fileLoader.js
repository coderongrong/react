function tplLoader(source) {
    console.log('source', source)
    const result = source
        .replace(/\s+/g, '')
        .replace(/@click='(.+?)'/g, '')
        .replace(/class='ref'/g, " ")
    const handle = source.replace(/\s+/g, '').replace(/.+@click='(.+?)'.+/g, '$1')
    return source
    return `
        export default (options) => {
            return '${result}'.replace(/\{\{(.*?)\}\}/g, ($, $1) => {
                return options[$1] || ''
            })
        }
    `
}

module.exports = tplLoader