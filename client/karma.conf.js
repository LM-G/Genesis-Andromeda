var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

// Karma configuration
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    port: 3001,

    files: [
      'app/*test.js',
      'app/**/*test.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'app/*test.js': ['webpack'],
      'app/**/*test.js': ['webpack']
    },

    webpack: {
      devtool: 'source-map',
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel" }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai')
    ],

  });
};