const webpack = require('webpack');

module.exports = function(options) {
  return {
    devServer: {
      host: '192.168.1.146',
      port: 8080,
      inline: true,
      stats: 'errors-only'
    }
  }
};