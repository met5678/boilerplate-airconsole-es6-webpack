const path               = require('path');
const webpack            = require('webpack');
const merge              = require('webpack-merge');
const validate           = require('webpack-validator');

const configs = require('./webpack-config/index.js');

const PATHS = {
  root:      __dirname,
  app:       path.join(__dirname, 'src/js'),
  assets:    path.join(__dirname, 'src/assets'),
  images:    path.join(__dirname, 'src/assets/images'),
  fonts:     path.join(__dirname, 'src/assets/fonts'),
  templates: path.join(__dirname, 'src/templates'),
  styles:    path.join(__dirname, 'src/styles'),
  dist:      path.join(__dirname, 'dist'),
}

const base = {
  entry: {
    screen: path.join(PATHS.app, 'screen'),
    controller: path.join(PATHS.app, 'controller')
  },
  output: {
    path: PATHS.dist,
    filename: '[name].[hash].js',
    publicPath: '/'
  }
};

var buildConfig = merge(base,
  configs.clean(PATHS),
  configs.setupJs(PATHS),
  configs.setupVendor(PATHS),
  configs.setupHtml(PATHS),
  configs.setupAssets(PATHS));

if(process.env.SITE_ENV === 'prod') {
  buildConfig = merge(buildConfig,
    configs.setupSassExtract(PATHS),
    configs.envProd(PATHS));
}
else if(process.env.SITE_ENV === 'hot') {
  buildConfig = merge(buildConfig,
    configs.setupSassInline(PATHS),
    configs.hotServer(PATHS),
    configs.envDev(PATHS));  
}
else {
  buildConfig = merge(buildConfig,
    configs.setupSassInline(PATHS),
    configs.devServer(PATHS),
    configs.envDev(PATHS));    
}

module.exports = validate(buildConfig, { quiet: true });
