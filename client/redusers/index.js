import { combineReducers } from 'redux'
import productsApp from './products.js'


const rootReducer = combineReducers({
  productsApp: productsApp
});

export default rootReducer;