// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss",'@nuxtjs/supabase','@pinia/nuxt' ],
  runtimeConfig: {
    movieKey: process.env.MOVIE_API_KEY
  },
  css: ['@/assets/css/tailwind.css'],
  app: {
    head: {
      title: 'MovieFlix | Cine',      
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},        
      ]
    },
    pageTransition: {name: "page", mode: "out-in"}
  },
  supabase: {
    redirect: false
  }
});