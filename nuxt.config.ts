// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '@/assets/css/global.css',
    '@/assets/css/tailwind.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['@/plugins/element-plus.js'],
})
