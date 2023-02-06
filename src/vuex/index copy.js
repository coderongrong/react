// console.log('vuex')

import { reactive, inject } from "vue";

// console.log(reactive, inject)

class Store {
    constructor(state, mutations, actions) {
        this.state = state;
        this.mutations = mutations;
        this.actions = actions
    }

    install(app) {
        const store = {}

        store.state = reactive(this.state)
        store.commit = (type, data) => {
            this.mutations[type](store.state, data)
        }
        store.dispatch = (type, data) => {
            this.actions[type]({commit: store.commit, state: store.state}, data)
        }
        store.cc = () => {
            console.log('cccccccc')
        }
        app.provide('store', store)

        // app.provide('store', {
        //     a: 1, b: 2, cc() {
        //         console.log('s  cc')
        //     },
        //     dd(xx) {
        //         console.log('dddddddd' + xx)
        //     }
        // })
    }
}

export function createStore() {
    const { state, mutations, actions } = [...arguments][0]
    return new Store(state, mutations, actions)
}

export function useStore() {
    return inject('store')
}