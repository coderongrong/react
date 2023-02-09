
function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/add':
            return { value: state.value + 1 }
        case 'counter/dec':
            return { value: state.value - 1 }
        default:
            return state
    }
}




// store.dispatch({ type: 'counter/incremented' })
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' })
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' })
// {value: 1}

export { counterReducer }