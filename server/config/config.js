'use strict'

var path = require('path');
var _ = require('lodash');

var baseConfig = {
  app: {
    port: 8081,
    root: path.normalize(__dirname + '/../..'),
    env: process.env.NODE_ENV
  }
}

module.exports = baseConfig;