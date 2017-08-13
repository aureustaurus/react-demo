import { combineReducers } from 'redux';

const API_URL = 'http://localhost:8081/';

const initialState = JSON.parse(window.localStorage.getItem('products')) || {}

import {
  FETCH_PRODUCTS,
  GET_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT
} from '../constants/productConst'

export default function productsApp(state = initialState, action) {

  switch (action.type) {

    case FETCH_PRODUCTS:
      var allProducts = action.products ? action.products : [];
      var newState = Object.assign({}, state, {allProducts: allProducts});
      return newState;

    case GET_PRODUCT:
      var product = action.product ? action.product : {};
      var newState = Object.assign({}, state, {product: product});
      return newState;

    case CREATE_PRODUCT:
      var product = action.product ? action.product : {};
      var newState = Object.assign({}, state, {product: product});
      return newState;

    case UPDATE_PRODUCT:
      var product = action.product ? action.product : {};
      var newState = Object.assign({}, state, {product: product});
      return newState;

    default:
      return state
    }
}


