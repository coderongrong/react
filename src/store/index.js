// import { createStore } from 'vuex'
import { createStore } from '../myStore'

export default createStore({
    state: {
        age: 10
    },
    getters: {
        myAge(state) {
            return state.age * 2
        }
    },
    mutations: {
        add(state, payload) {
            console.log('xxxxxx add')
            state.age = state.age + payload
        }
    },
    actions: {
        asyncAdd(state, payload) {
            console.log('dispatch')
            setTimeout(() => {
                state.commit('add', payload)
            }, 500)
        }
    }
})