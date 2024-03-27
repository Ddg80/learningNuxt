<script setup>
import SearchBar from "../components/SearchBar.vue";

const searchTerm = ref("");

const onSearch = () => {
  console.log(`Terme de recherche du composant enfant : ${searchTerm.value}`);
  // Vous pouvez potentiellement effectuer une recherche réelle ici en utilisant searchTerm
};
</script>

<template>
  <div>
    <SearchBar v-model="searchTerm" @search="onSearch" />
  </div>
</template>
