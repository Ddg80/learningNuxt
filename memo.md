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
