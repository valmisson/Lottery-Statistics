const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets/'),
        '@views': path.resolve(__dirname, 'src/views/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@database': path.resolve(__dirname, 'src/services/firebaseDB.js')
      }
    }
  }
}
