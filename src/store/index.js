import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import { counterReducer } from './count.js'
import { booksReducer } from './books.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  count: counterReducer,
  books: booksReducer,
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store
