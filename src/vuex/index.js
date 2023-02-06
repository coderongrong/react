import { reactive, inject } from 'vue'

class Store {
    constructor(state, mutations, actions) {
        this.state = state;
        this.mutations = mutations;
        this.actions = actions
    }

    install (app) {
        const store = {}
        store.state = reactive(this.state)
        store.commit = (type, data) => {
            console.log(type, data)
            this.mutations[type](store.state, data)
        }
        store.dispatch = (type, data) => {
            this.actions[type]({commit: store.commit, state: store.state}, data)
        }
        store.cc = () => {}
        store.dd = 'abc'
        app.provide('store', store)
    }
}

export function createStore() {

    const {state, mutations, actions} = [...arguments][0]

    return new Store(state, mutations, actions)
}

export function useStore() {

    return inject('store')
}