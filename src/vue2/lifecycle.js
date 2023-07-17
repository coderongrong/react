function mountComponent (vm, el) {
    const options = vm.$options
    vm.$el = el

    let updataComponent = () => {
        vm._updata(vm._render())
    }

    new Watcher(vm, updataComponent, () => {}, true)
}