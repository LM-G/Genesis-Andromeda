'use strict';

var webpack = require("webpack");

module.exports = {
  devtool: 'source-map',
  entry: {
    app: "./app/app.js",
    vendor: [
      "angular",
      "angular-ui-router",
      "angular-translate",
      "angular-translate-loader-static-files",
      "angular-storage",
      "angular-jwt"
    ]
  },
  output: {
    filename: "genesis.js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "genesis.vendors.js")
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" }
    ]
  }
};