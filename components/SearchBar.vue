<script setup>
import { ref } from "vue";

defineProps(["searchError"]);

const emit = defineEmits(["search"]);
const searchInput = ref("");

const searchMovie = () => {
  console.log(searchInput.value);
  emit("search", searchInput.value);
};
</script>

<template>
  <section class="search-section bg-sky-50 py-4">
    <div class="container mx-auto md:px-40 px-5">
      <div class="flex">
        <input
          class="border border-sky-400 py-2 px-4 w-full rounded-l-full focus:outline-none focus:ring-2 focus:ring-sky-400"
          type="text"
          placeholder="Rechercher un film..."
          v-model="searchInput"
        />
        <button
          class="bg-sky-500 hover:bg-sky-600 text-white py-4 px-4 rounded-r-full"
          type="submit"
          @click="searchMovie()"
        >
          Rechercher
        </button>
      </div>
      <span v-if="searchError" class="text-red-700 px-4 py-3" role="alert">
        this field is required
      </span>
    </div>
  </section>
</template>
