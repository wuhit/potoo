// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  css: [
    '~/assets/css/global.css',
  ],
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
