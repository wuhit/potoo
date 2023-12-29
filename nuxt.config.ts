// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Potoo',
    },
  },

  css: [
    '~/assets/css/global.css',
  ],

  devtools: {
    enabled: true,
  },

  modules: [
    '@unocss/nuxt',
    'nuxt-security',
  ],
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
})
