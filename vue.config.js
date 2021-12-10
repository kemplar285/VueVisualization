module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: 'http://localhost:8080'
  },
  lintOnSave: false,
  publicPath: '/',

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: tag => tag.startsWith('Button')
        }
      }))
  }
}
