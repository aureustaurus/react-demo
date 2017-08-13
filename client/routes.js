import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

const Main = require('./views/Main.jsx');
const Products = require('./views/Products.jsx');
// import { Product } from './views/Product.jsx';
const Product = require('./views/Product.jsx');

const routes = (
  <Router history={browserHistory}>
    <div>
      <Route path="/" component={Product} />
    </div>
  </Router>
);

module.exports = routes