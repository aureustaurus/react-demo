'use strict'

var MongoClient = require('thunkify-mongodb').MongoClient
var mongodb = require('mongodb')
var thunkMongo = new MongoClient(new mongodb.MongoClient());
thunkMongo.connectOriginal = thunkMongo.connect;
thunkMongo.ObjectId = mongodb.ObjectId;
thunkMongo.DBRef = mongodb.DBRef;
var config = require('./config.js');

thunkMongo.connect = function*() {
  if (thunkMongo.db) {
    thunkMongo.db.close();
  }
  var db = thunkMongo.db = yield thunkMongo.connectOriginal(config.mongo.url)
  thunkMongo.products = yield db.collection('product');
}

module.exports = thunkMongo;