<script setup>
import { useAuthStore } from "~/store/auth";
import SearchBar from "../components/SearchBar.vue";
import { useSessionStore } from "~/store/session";

definePageMeta({
  middleware: ["auth"],
});

const toast = useToast();
const authStore = useAuthStore();
const sessionStore = useSessionStore();

if (authStore.getIsAuthenticated && sessionStore.getIsFirstConnect) {
  toast.add({
    id: "is_authenticated",
    title: "Information",
    description: "Bienvenue",
    icon: "i-heroicons-check-circle",
    timeout: 3000,
  });
  sessionStore.setIsFirstConnect(false)
}


let searchError = ref(false);
const movies = ref([]);

const onSearch = async (searchTerm) => {
  if (searchTerm !== "") {
    searchError.value = false;
    const { data, error } = await useFetch(
      `/api/movies/search?searchInput=${searchTerm}`
    );
    movies.value = data.value;
  } else {
    searchError.value = true;
  }
};

const { data: moviesData, error } = await useFetch("/api/movies");
console.log(toRaw(moviesData.value));
// &language=en-US&page=1
movies.value = toRaw(moviesData.value);
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
