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

const {data: movies, error} = await useFetch(
  'https://api.themoviedb.org/3/movie/now_playing?api_key=9252a363c4520be2fb02fb5a4d0bff80&language=en-US&page=1'
)

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
