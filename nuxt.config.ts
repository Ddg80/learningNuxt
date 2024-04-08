// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase','@pinia/nuxt', '@nuxt/ui'],
  runtimeConfig: {
    movieKey: process.env.MOVIE_API_KEY,
    nodemailerConfig: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_SECRET,
      },
    },
  },
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
  },
});