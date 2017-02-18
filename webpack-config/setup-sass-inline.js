const path = require('path');

module.exports = function(PATHS) {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader'],
          include: [PATHS.styles]
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        }
      ]
    }
  };
};