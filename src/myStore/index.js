let Store = {
  createStore,
  useStore
}
export function useStore() {
  return useStore.options
}
export function createStore() {
  useStore.options = arguments[0]
  let obj = {}
  obj.store = arguments[0]

//   this._vm = new Vue({
//     data: {
//       $$state: options.state, // 在data中定义 $$xxx, 在实例中是获取不到该值的，被保护起来了。可以通过 this.$data.$$state获取
//     },
//     computed,
//   });

// 

  obj.store.commit = (type, payload) => {
    arguments[0]['mutations'][type](arguments[0].state, payload)
  }
  obj.store.dispatch = (type, payload) => {
    arguments[0]['actions'][type](arguments[0], payload)
  }
  return obj
}
