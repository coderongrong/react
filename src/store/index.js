import { createStore } from 'redux'
import { counterReducer } from './reducer.js'

export default createStore(counterReducer)