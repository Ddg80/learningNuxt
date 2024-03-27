<script setup>
import SearchBar from "../components/SearchBar.vue";
let searchError = ref(false);

const onSearch = (searchTerm) => {
  console.log(searchTerm);
  console.log(`Terme de recherche du composant enfant : ${searchTerm}`);
  if (searchTerm) {
    console.log("coucou");
    searchError.value = false;
  } else {
    console.log("nono");
    searchError.value = true;
  }
};
</script>

<template>
  <div>
    <SearchBar @search="onSearch" :searchError="searchError" />
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-sky-50"
    ></div>
  </div>
</template>
