const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(PATHS) {
  return {
    plugins: [
      new CleanWebpackPlugin([PATHS.dist], {
        root: process.cwd()
      })
    ]
  };
};
