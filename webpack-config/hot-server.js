const path = require('path');
const webpack = require('webpack');

module.exports = function(PATHS) {
  return {
    entry: {
      screen: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://192.168.1.146:8080',
        'webpack/hot/dev-server',
        path.join(PATHS.app, 'screen')
      ],
      controller: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://192.168.1.146:8080',
        'webpack/hot/dev-server',
        path.join(PATHS.app, 'controller')
      ]
    },
    devServer: {
      hot: true,
      inline: true,
      stats: 'errors-only'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  }
};
