var path = require('path')

module.exports = {
  pwa: {
    name: 'workout-timer',
    themeColor: '#283593'
  },
  css: {
    loaderOptions: {
      stylus: {
        // /!\ put only "abstract" style like variables or mixin
        // => because it would be included for each components
        import: [path.resolve(__dirname, 'src/assets/stylus/_variables')]
      }
    }
  }
}
