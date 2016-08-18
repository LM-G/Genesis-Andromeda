'use strict';

var webpack = require("webpack");

/* TODO : créer plusieurs mode de déploiement : DEV, PROD */
console.log('env : ', process.env.BUILD_ENV);

module.exports = {
  /* generate sourcemaps */
  devtool: 'source-map',
  entry: {
    app: "./app/app.js",
    /* all the vendors to include */
    vendor: [
      "angular",
      "angular-ui-router",
      "angular-translate",
      "angular-translate-loader-static-files",
      "angular-storage",
      "angular-jwt",
      "moment",
      "angular-moment"
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