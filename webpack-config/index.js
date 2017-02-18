module.exports = {
  clean:              require('./clean'),
  devServer:          require('./dev-server'),
  hotServer:          require('./hot-server'),

  setupJs:            require('./setup-js'),
  setupAssets:        require('./setup-assets'),
  setupSassInline:    require('./setup-sass-inline'),
  setupSassExtract:   require('./setup-sass-extract'),
  setupHtml:          require('./setup-html'),
  setupVendor:        require('./setup-vendor'),

  envDev:             require('./env-dev'),
  envProd:            require('./env-prod')
};
