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
  hanlders?.forEach((item) => item.call(vm))
}
