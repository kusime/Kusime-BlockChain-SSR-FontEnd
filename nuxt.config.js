// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `usePinia()`
          'defineStore',
          'storeToRefs',
          // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
          ['defineStore', 'definePiniaStore']
        ]
      }
    ],
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  // https://html-validator.nuxtjs.org/
  colorMode: {
    classSuffix: ''
  },
  // https://qiita.com/ot_RikuOta/items/bd644957dacbac057a05#%E3%83%AC%E3%82%A4%E3%82%A2%E3%82%A6%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90
  build: {
    transpile: ['vuetify']
  },
  tailwindcss: {
    cssPath: '~/assets/main.css',
  },
  css: [
    'vuetify/lib/styles/main.sass',
    // "~/assets/transition.css"
  ],
  // https://v8.i18n.nuxtjs.org/getting-started/basic-usage/
  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        }
      }
    }
  }
})
