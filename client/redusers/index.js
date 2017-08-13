import { combineReducers } from 'redux'
import productsApp from './products.js'


const rootReducer = combineReducers({
  products: productsApp
});

export default rootReducer;