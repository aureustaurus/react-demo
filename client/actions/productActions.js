// TODO import react-observable
import {
  FETCH_PRODUCTS,
  GET_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT
} from '../constants/productConst'

const API_URL = 'http://localhost:8081/';

export function fetchProducts(payload) {
  // TODO
  // let products = [
  //   {id: 1, name: 'prod1', color: 'red'},
  //   {id: 2, name: 'prod2', color: 'green'}
  // ];
  return {
    type: FETCH_PRODUCTS//,
    // data: products
  }
}

export function getProduct(id) {
  console.log('getProduct');
  // TODO
  // let product = {id: 1, name: 'prod1', color: 'red'};
  return {
    type: GET_PRODUCT//,
    // product: product
  }
}

export function createProducte(data) {
  console.log('createProducte');
  // TODO
  // let product = JSON.stringify(data);
  // TODO get product from DB with id
  // console.log('product', product);
  return {
    type: CREATE_PRODUCT//,
    // product: product
  }
}

export function updateProduct(data) {
  console.log('updateProduct');
  // TODO
  // let product = JSON.stringify(data);
  // console.log('product', product);
  return {
    type: UPDATE_PRODUCT//,
    // product: product
  }
}