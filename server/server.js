var express = require('express');
var app = express();
var wrap = require('co-express');
var config = require('./config/config');

app.get('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('Welcome');
});

app.get('/product', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('Welcome');
});

app.get('/product/:id', function (req, res) {
  var prodId = req.params.id;
  console.log('prodId', prodId);
  // var result = yield storyModel.getItemFromServiceById(itemId);
  res.header("Access-Control-Allow-Origin", "*");
  res.send('Welcome');
});

app.post('/product/new', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('Create product');
});

app.put('/product/:id', function (req, res) {
  var prodId = req.params.id;
  console.log('prodId', prodId);
  res.header("Access-Control-Allow-Origin", "*");
  res.send('Edit product');
});

app.listen(config.app.port, function () {
  console.log('Server listening on port 8081');
});
