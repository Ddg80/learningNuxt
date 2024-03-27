<script setup>
import SearchBar from "../components/SearchBar.vue";

const onSearch = (searchTerm) => {
  console.log(searchTerm);
  console.log(`Terme de recherche du composant enfant : ${searchTerm}`);
};
</script>

<template>
  <div>
    <SearchBar @search="onSearch" />
  </div>
</template>
