// TODO import react-observable
import {
  FETCH_PRODUCTS,
  GET_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT
} from '../constants/productConst'

import axios from 'axios';
const API_URL = 'http://localhost:8081/';

export function fetchProducts() {
  // TODO
  let url = API_URL + 'product';
  // let products = [
  //   {id: 1, name: 'prod1', color: 'red'},
  //   {id: 2, name: 'prod2', color: 'green'}
  // ];
    axios.get(url)
    .then(response => {
      if (response.status == 200) {
        products = response.data;
        return {
          type: FETCH_PRODUCTS,
          products: products
        }
      }
    })
    .catch((error) => {
      console.log(error);
    })

}

export function getProduct(id) {
  console.log('getProduct');
  // TODO
  let url = API_URL + "product/" + id;
  // let product = {id: 1, name: 'prod1', color: 'red'};
  return {
    type: GET_PRODUCT//,
    // product: product
  }
}

export function createProduct(data) {
  console.log('createProduct');
  // TODO
  let url = API_URL + "product/new"
  // TODO get product from DB with id
  console.log('product', data);
  return {
    type: CREATE_PRODUCT,
    product: data
  }
}

export function updateProduct(data) {
  console.log('updateProduct');
  // TODO get product from DB after update
  let url = API_URL + "product/" + data.id;
  return {
    type: UPDATE_PRODUCT,
    product: data
  }
}