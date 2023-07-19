let id = 0
class Dep {
  constructor() {
    this.id = id++
    this.subs = []
  }

  depend() {
    // this.subs.push(Dep.target)
    Dep.target.addDep(this)
  }

  notify() {
    this.subs.forEach((fn) => fn.updata())
  }
  addSub(watcher) {
    this.subs.push(Dep.target)
  }
}

// Dep.target
let stacts = []

function pushTarget(watcher) {
  Dep.target = watcher
  stacts.push(watcher)
}
function popTarget() {
  stacts.pop()
  Dep.target = stacts[stacts.length - 1]
}
