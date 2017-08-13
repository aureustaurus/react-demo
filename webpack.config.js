var path = require('path');
var webpack = require('webpack');


module.exports = {
  name: 'client',
  entry: './app.js',
  output: {
    path: __dirname, filename: 'app-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets: ["es2015", "stage-0", "react"]
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
}