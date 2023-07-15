
const oldArrMethods = Array.prototype

let arrayMethods = Object.create(oldArrMethods)

const methods = [
    'pop',
    'push',
    'shift',
    'unshift',
    'sort',
    'reverse',
    'splice'
]

methods.forEach(item => {
    arrayMethods[item] = function(...args) {
        const result = oldArrMethods[item].apply(this, args)
        let ob = this.__ob__
        let inserted
        switch (item) {
            case 'push':
            case "unshift":
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }
        if(inserted) ob.observeArray(inserted)
        return result
    }
})
