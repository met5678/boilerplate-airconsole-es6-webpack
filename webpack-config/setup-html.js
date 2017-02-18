const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(PATHS) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Screen',
        template: path.join(PATHS.templates,'base.ejs'),
        filename: path.join(PATHS.dist, 'screen.html'),
        excludeChunks: ['controller']
      }),
      new HtmlWebpackPlugin({
        title: 'Controller',
        template: path.join(PATHS.templates,'base.ejs'),
        filename: path.join(PATHS.dist, 'controller.html'),
        excludeChunks: ['screen']
      })
    ]
  };
};