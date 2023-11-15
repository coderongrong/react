let Store = {
    createStore,
    useStore
}
export function useStore () {
    return useStore.options
}
export function createStore () {
    useStore.options = arguments[0]
    let obj = {}
    obj.store = arguments[0]
    obj.store.state = reactive(arguments[0].state)
    console.log(obj.store)
    Object.defineProperty(obj.store.getters, 'myAge', {
        get(){
            console.log('x')
            return 'gettersssssssss'
        }
    })
    obj.store.commit = (type, payload) => {
        arguments[0]['mutations'][type](arguments[0].state, payload)
    }
    obj.store.dispatch = (type, payload) => {
        arguments[0]['actions'][type](arguments[0], payload)
    }
    return obj
}