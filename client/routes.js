import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

const Product = require('./views/Product.jsx');

const routes = (
  <Router history={browserHistory}>
    <div>
      <Route path="/" component={Product} />
    </div>
  </Router>
);

module.exports = routes