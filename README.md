# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


# Memo : Learning Lab

# Inititialize project

```Js
pnpm dlx nuxi@latest init <project-name>
cd project-name
pnpm add --save-dev @nuxtjs/tailwindcss
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
