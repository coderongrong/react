import { legacy_createStore  as createStore, combineReducers, applyMiddleware } from 'redux'
import { counterReducer } from './reducer.js'
import { booksReducer } from './books.js'

export default createStore(combineReducers({ 
    count: counterReducer,
    books: booksReducer
}))