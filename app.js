import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './client/configureStore.js';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

// const routes = require('./client/routes.js');
const Product = require('./client/views/Product.jsx');

const store = configureStore();

// ReactDOM.render(routes, document.getElementById('container'));

ReactDOM.render(
  <Provider store = {store}>
    <Router history = {browserHistory}>
        <Route path = "/" component = {Product} store = {store} />
    </Router>
  </Provider>,
  document.getElementById('container')
);