// import { createStore } from 'vuex'
import { createStore } from '../myStore'

export default createStore({
    state: {
        age: 10
    },
    getters: {
        myAge(state) {
            console.log('age')
            return state.age * 2
        },
        doubleAge(state) {
            return state.age * 4
        }
    },
    mutations: {
        add(state, payload) {
            state.age = state.age + payload
        }
    },
    actions: {
        asyncAdd(state, payload) {
            setTimeout(() => {
                state.commit('add', payload)
            }, 500)
        }
    }
})