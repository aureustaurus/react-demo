import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './client/configureStore.js';

const routes = require('./client/routes.js');

const store = configureStore();
// var Header = require('./client/views/Header.jsx');

//ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(routes, document.getElementById('container'));