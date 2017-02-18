const webpack = require('webpack');

module.exports = function(options) {
  return {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        'ENVIRONMENT': JSON.stringify('prod'),
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: true
        },
        mangle: {
          except: ['webpackJsonp']
        }
      })
    ]
  }
};
