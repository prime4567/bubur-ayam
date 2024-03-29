import getRoutes from "./utils/getRoutes";
import getSiteMeta from "./utils/getSiteMeta";
const meta = getSiteMeta();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://buburayam.id'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bubur Ayam',
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Catatan penikmat bubur ayam' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/analytics.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  content: {

  },

  sitemap: { 
    hostname: 'https://buburayam.id',
    routes() {
      return getRoutes();
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  devServerHandlers: [],
}
