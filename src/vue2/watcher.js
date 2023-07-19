let ids = 0
class Watcher {
  constructor(vm, exprOrFn, callback, options) {
    this.vm = vm
    this.callback = callback
    this.options = options
    this.id = ids++
    this.getter = exprOrFn

    this.depsId = new Set()
    this.deps = []
    this.get()
  }

  addDep(dep) {
    let id = dep.id
    if (!this.depsId.has(id)) {
      this.depsId.add(id)
      this.deps.push(dep)
      dep.addSub(this)
    }
  }

  get() {
    pushTarget(this)
    this.getter()
    popTarget()
  }

  updata() {
    // this.get()
    queueWatcher(this)
  }

  run() {
    this.get()
  }
}
let queue = []
let has = {}

function flushD() {
  queue.forEach((fn) => fn.run())
  queue = []
  has = {}
}

function queueWatcher(watcher) {
  const id = watcher.id
  if (has[id] == null) {
    queue.push(watcher)
    has[id] = true
    nextTick(flushD)
  }
}
