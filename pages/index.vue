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

//FETCH
const movieId = ref(123);
const title = ref("Kung Fu Panda 4");
const date = ref("2024-03-02");
const poster = ref(
  "https://www.cinehorizons.net/sites/default/files/affiches/671046041-kung-fu-panda-4.jpg"
);
</script>

<template>
  <div>
    <SearchBar @search="onSearch" :searchError="searchError" />
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-sky-50"
    >
      <div v-for="n in 8">
        <MovieCard
          :movieId="movieId"
          :title="title"
          :date="date"
          :poster="poster"
        />
      </div>
    </div>
  </div>
</template>
