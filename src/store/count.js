import { cloneDeep } from "lodash"

function counterReducer(state = { value: 100 }, action) {
    const _state = cloneDeep(state)
    switch (action.type) {
        case 'counter/add':
            return { value: _state.value + 1 }
        case 'counter/dec':
            return { value: _state.value - 1 }
        case 'counter/equal':
            return { value: 100 }
        default:
            return _state
    }
}

// store.dispatch({ type: 'counter/incremented' })
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' })
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' })
// {value: 1}

export { counterReducer }
