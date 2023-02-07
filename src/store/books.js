function booksReducer(state = { value: ['css', 'html'] }, action) {
    switch (action.type) {
        case 'book/push':
            return { value: state.value.concat('js') }
        case 'book/pop':
            return { value: state.value.pop() }
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

export { booksReducer }