let id = 0
class Watcher {
    constructor (vm, exprOrFn, callback, options) {
        this.vm = vm
        this.callback = callback
        this.options = options
        this.id = id ++
        this.getter = exprOrFn
        this.get()
    }

    get() {
        pushTarget(this)
        this.getter()
        popTarget()
    }
}