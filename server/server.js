var express = require('express');
var app = express();
var wrap = require('co-express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var config = require('./config/config');
var db = require('./config/mongo');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res, next) {
  res.send('Welcome');
});

app.get('/product', wrap(function*(req, res) {
  yield db.connect();
  var products = yield db.products.find({}).toArray();
  res.send(products);
}));

app.get('/product/:id', wrap(function*(req, res) {
  yield db.connect();
  var prodId = parseInt(req.params.id);
  var product = yield db.products.findOne({'id': prodId});
  res.send(product);
}));

app.post('/product/new', wrap(function*(req, res) {
  yield db.connect();
  var products = [];
  var product = req.body ? req.body : {};

  var lastProduct = yield db.products.find({}).sort({'id':-1}).limit(1).toArray();
  product.id = (lastProduct && lastProduct[0] && lastProduct[0].id) ? (lastProduct[0].id + 1) : 1;

  yield db.products.insert(product);
  products = yield db.products.find({}).toArray();
  res.send(products);
}));

app.put('/product/:id', wrap(function*(req, res) {
  yield db.connect();
  var products = [];
  var prodId = parseInt(req.params.id);
  var product = req.body ? req.body : {};

  yield db.products.update({id: prodId}, {"$set": {'name': product.name, 'color': product.color}});
  products = yield db.products.find({}).toArray();
  res.send(products);
}));

app.listen(config.app.port, function () {
  console.log('Server listening on port 8081');
});
