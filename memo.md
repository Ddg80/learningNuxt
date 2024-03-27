# Inititialize project

```Js
pnpm dlx nuxi@latest init <project-name>
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
