'use strict'

var path = require('path');
var _ = require('lodash');

var baseConfig = {
  app: {
    port: 8081,
    root: path.normalize(__dirname + '/../..'),
    env: process.env.NODE_ENV
  },
  mongo: {
    url: 'mongodb://localhost:27017/test'
  }
}

module.exports = baseConfig;