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
  let url = API_URL + 'product';
  return function (dispatch) {
    axios.get(url)
    .then(response => {
      if (response.status == 200) {
        var products = response.data;
        dispatch({
          type: FETCH_PRODUCTS,
          products: products
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

}


export function getProduct(id) {
  console.log('getProduct');
  let url = API_URL + "product/" + id;
  return function (dispatch) {
    axios.get(url)
    .then(response => {
      if (response.status == 200) {
        var product = response.data;
        dispatch({
          type: GET_PRODUCT,
          product: product
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

}

export function createProduct(data) {
  console.log('createProduct');
  let url = API_URL + "product/new"
  return function (dispatch) {
    axios.post(url, data)
    .then(response => {
      if (response.status == 200) {
        var products = response.data;
        dispatch({
          type: CREATE_PRODUCT,
          products: products
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export function updateProduct(data) {
  console.log('updateProduct');
  let url = API_URL + "product/" + data.id;
  return function (dispatch) {
    axios.put(url, data)
    .then(response => {
      if (response.status == 200) {
        var products = response.data;
        dispatch({
          type: UPDATE_PRODUCT,
          products: products
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
}