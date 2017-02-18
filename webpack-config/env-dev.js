const webpack = require('webpack');

module.exports = function(options) {
  return {
    devtool: 'inline-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'ENVIRONMENT': JSON.stringify('dev')
      })
    ]
  }
};
