const path = require('path');

module.exports = function(PATHS) {
  return {
    module: {
      loaders: [
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          include: PATHS.images
        }
      ]
    }
  };
};