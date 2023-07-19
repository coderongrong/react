function mountComponent(vm, el) {
  const options = vm.$options
  vm.$el = el

  callHook(vm, 'beforeMount')

  let updataComponent = () => {
    vm._updata(vm._render())
  }

  new Watcher(vm, updataComponent, () => {}, true)
  callHook(vm, 'mounted')
}

function callHook(vm, hook) {
  const hanlders = vm.$options[hook]
  if(hanlders) {
    let i = -1
    while(++i < hanlders.length) {
      hanlders[i].call(vm)
    }
  }
}
