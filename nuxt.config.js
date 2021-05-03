require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TUI - Hotel offers',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Tui test',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  dotenv: {
    filename: '.env',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/_fonts.scss', '@/assets/scss/main.scss'],

  styleResources: {
    scss: ['@/assets/scss/_variables.scss', '@/assets/scss/_mixins.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/style-resources'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-clamp', 'resize-detector'],
    extend(config, { isDev, isClient, loaders: { vue } }) {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true },
              { cleanupIDs: true },
              { removeViewBox: false },
              {
                prefixIds: {
                  prefixIds: true,
                  prefixClassNames: false,
                },
              },
            ],
          },
        },
      })
    },
  },
}
