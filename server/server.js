var express = require('express');
var app = express();
var wrap = require('co-express');
var _ = require('lodash');
var config = require('./config/config');

var products = [
  {id: 1, name: 'prod1', color: 'red'},
  {id: 2, name: 'prod2', color: 'green'},
  {id: 3, name: 'prod3', color: 'blue'},
  {id: 4, name: 'prod4', color: 'blue'}
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next) {
  res.send('Welcome');
});

app.get('/product', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  products = JSON.stringify(products);
  res.send(products);
});

app.get('/product/:id', function (req, res) {
  var prodId = req.params.id;
  console.log('prodId', prodId);
  var product = {id: 1, name: 'prod1', color: 'red'};
  // TODO get product from DB
  product = JSON.stringify(product);
  // var result = yield storyModel.getItemFromServiceById(itemId);
  res.send(product);
});

app.post('/product/new', function (req, res) {
  var product = {id: 1, name: 'prod1', color: 'red'};
  // TODO get product from DB
  product = JSON.stringify(product);
  res.send(product);
});

app.put('/product/:id', function (req, res) {
  var prodId = req.params.id;
  console.log('prodId', prodId);
  var product = {id: 1, name: 'prod1', color: 'red'};
  // TODO get product from DB
  product = JSON.stringify(product);
  res.send(product);
});

app.listen(config.app.port, function () {
  console.log('Server listening on port 8081');
});
