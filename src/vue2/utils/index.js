function isObj (data) {
    return typeof data === 'object' && data !== null
}

function def(obj, key, value) {
    Object.defineProperty(obj, key, {
        enumerable: false,
        configurable: false,
        value
    })
}