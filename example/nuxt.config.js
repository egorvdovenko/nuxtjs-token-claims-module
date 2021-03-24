const { resolve } = require('path')

module.exports = {
  mode: 'universal',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  router: {
    middleware: ['tokenClaims']
  },
  modules: [
    '@@'
  ],
  buildModules: [
    '@nuxtjs/router'
  ],
  tokenClaims: {
    claims: [
      {
        name: 'permission',
        superValue: 'General'
      }
    ],
    middleware: {
      redirect: '/errors/403'
    },
    cookie: {
      name: 'token'
    }
  }
}
