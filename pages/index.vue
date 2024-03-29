<script setup>
import SearchBar from "../components/SearchBar.vue";
let searchError = ref(false);

const onSearch = (searchTerm) => {
  if (searchTerm) {
    searchError.value = false;
  } else {
    searchError.value = true;
  }
};

const {data: movies, error} = await useFetch("/api/movies")
// &language=en-US&page=1

</script>

<template>
  <div>
    <SearchBar @search="onSearch" :searchError="searchError" />
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-sky-50"
    >
      <div v-for="movie in movies.results" :key="movie.id">
        <MovieCard
          :movieId="movie.id"
          :title="movie.title"
          :date="movie.release_date"
          :poster="movie.poster_path"
        />
      </div>
    </div>
  </div>
</template>
