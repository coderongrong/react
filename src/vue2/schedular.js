let callbacks = []
let waiting = false

function nextTick (cb) {
    callbacks.push(cb)
    if(waiting == false) {
        setTimeout(() => {
            callbacks.forEach(fn => fn())
            waiting = false
        }, 0)
        waiting = true
    }
}