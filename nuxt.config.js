const pkg = require('./package')

const router =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/dist/'
        }
      }
    : {}

module.exports = {
  ...router,
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "We're taking the temperature of the Ocean. Literally."
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Project Hermes'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://project-hermes.com/assets/img/bg-logo-2.png'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '2048'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '972'
      }

      // <meta charset="utf-8">
      // <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      // <meta property="og:title" content="Project Hermes" />
      // <meta property="og:description" content="We're taking the temperature of the Ocean. Literally." />
      // <meta name="description" content="We're taking the temperature of the Ocean. Literally." />
      // <meta property="og:image" content="http://project-hermes.com/img/bg-logo.jpg" />
      // <meta property="og:image:width" content="2048" />
      // <meta property="og:image:height" content="972" />
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Eczar|Raleway'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
