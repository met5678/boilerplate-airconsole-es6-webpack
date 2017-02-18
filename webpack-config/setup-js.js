const path = require('path');
const webpack = require('webpack');

module.exports = function(PATHS) {
  return {
    externals: {
      'airconsole': 'AirConsole'
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  };
};
