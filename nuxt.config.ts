// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  runtimeConfig: {
    movieKey: process.env.MOVIE_API_KEY
  },
  app: {
    pageTransition: {name: "page", mode: "out-in"}
  }
});
