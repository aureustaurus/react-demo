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
      console.log('FETCH_PRODUCTS')
      // TODO
      newState = Object.assign({}, state);
      return newState;

    case GET_PRODUCT:
      console.log('GET_PRODUCT')
      // TODO
      newState = Object.assign({}, state);
      return newState;

    case CREATE_PRODUCT:
      console.log('CREATE_PRODUCT')
      // TODO
      newState = Object.assign({}, state);
      return newState;

    case UPDATE_PRODUCT:
      console.log('UPDATE_PRODUCT')
      // TODO
      newState = Object.assign({}, state);
      return newState;

    default:
      return state
    }
}


