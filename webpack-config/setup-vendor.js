const path = require('path');
const webpack = require('webpack');
const pkg  = require('../package.json');

module.exports = function(PATHS) {
  return {
    entry: {
      vendor: Object.keys(pkg.dependencies)
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      })
    ]
  };
};