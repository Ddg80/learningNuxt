# NUXT 3

[Nuxt article](https://kinsta.com/fr/base-de-connaissances/nuxt-js/)

Nuxt.js est un framework de rendu côté serveur construit sur Vue.js. Il fait abstraction de la plupart de la configuration complexe impliquée dans la gestion des données asynchrones, des intergiciels et du routage.

## Pages Générées statiques
Ce type de site web ne nécessite aucune source de contenu externe – le contenu est déjà intégré dans le HTML. 
## Applications à page unique (Single page application ou SPA)
Cette approche de développement frontend récupère du contenu dynamique à partir d’une API externe et l’affiche du côté client. 

## Applications universelles

Application universelle est un terme qui décrit l’utilisation d’une approche de rendu côté serveur pour récupérer les données côté client sur le serveur avant de rendre entièrement la page sur le navigateur client.

Le rendu côté serveur (Server-Side Rendering ou SDR) est un problème connu dans Vue.js car il implique des configurations fastidieuses pour l’obtenir correctement.

Nuxt.js résout le problème du SSR dans Vue.js, ce qui est utile pour l’optimisation des moteurs de recherche (SEO). Nuxt.js peut même étendre les applications universelles pour accueillir une application monolithique à part entière, où le frontend et le backend partagent une seule base de code

## Avantages à utiliser Nuxt

1- Il intégre la création de rendu côté serveur très facilement
2- Il permet de créer des routes en fonction de l'ordonnancement des dossiers
3- Il met à jour automatiquement les modifications grâce au rechargement à chaud
4- Il assure une vérification du code grâce à la transpilation de typescript
5- 

# Inititialize project

Création d'un projet nuxt avec pnpm içi.

.nuxt 
-- assets
-- components
-- composables
-- layouts
-- middleware
-- pages
-- plugins
-- store
-- static
-- nuxt.config.ts


1- .nuxt       : Il contient les fichiers ou artefacts générés lors de la commande **npm run build**
2- assets      : Dossiers pour les images, les polices, les fichiers SASS
3- components  : Pour stocker tous les composants Vue, fichiers de type .vue avec une partie template, une partie   script et une partie style
4- layouts     : Il permet de gérer la mise en page pour séparer les différentes structures de l'application en ajoutant un en-tête, des pieds de page, etc... différents.
5- middlewares : Il permet de réserver l'accès de certaines pages avec des vérifications avant le rendu des routes et de l'autoriser ou non.
5- pages       : Toutes les pages sont en .vue et elle crée automatiquement la configuration du routeur.Nuxt traite les routes en ajoutant des attributs [id].vue pour aller sur une page avec l'id de l'article, [slug].vue pour aller sur la page avec le slug de l'article article-du-film
6- plugins     :  



```Js
pnpm dlx nuxi@latest init <project-name>
cd project-name
pnpm add --save-dev @nuxtjs/tailwindcss
pnpm add @nuxt/supabase
pnpm add @nuxt/ui
pnpm i --save-dev @nuxtjs/color-mode
pnpm install nodemailer
```

## Pages

1- Initialize page without default

```Js
<template>
  <NuxtPage />
</template>
```

2- Create file index.vue in directory pages

### Default page

```Js
<script setup></script>

<template>
  <div>
    <Navbar />
    <Hero />
    <slot />
  </div>
</template>
```

3- Create page with default page (GLOBAL)

**app.vue**

```Js
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

### Custom page

1- Create page with custom page (individual page)

```Js
<script setup></script>

<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>
```

2- Add custom page in login (without banner)

**pages - Login.vue**

```Js
<script setup>
definePageMeta({
  layout: "custom",
});
</script>
```

## Page Details 

1- Create page [id].vue

2- Link to page movie details

```JS
  <div class="mt-4 p-2 text-right">
          <NuxtLink
            :to="`movie/${movieId}`"
            class="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded"
            >Get Details
          </NuxtLink>
        </div>
```

## Transition page

1- Config transition page

```JS
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    pageTransition: {name: "page", mode: "out-in"}
  }
});
```

2- In app.vue : add style

```JS
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  filter: grayscale(1)
}
</style>
```

## Fetch data

1- Create folder server/api/movies
2- Use defineEventHandler
3- Define MOVIE_API_KEY=<YOUR API KEY>


```JS
export default defineEventHandler(async () => {
  const {movieKey} = useRuntimeConfig()
    try {
        const data = await $fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9252a363c4520be2fb02fb5a4d0bff80')
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        return null;     
    }
}) 
```