import { createStore } from 'redux'
import rootReducer from './redusers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState)
  return store
}