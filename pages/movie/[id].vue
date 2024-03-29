<script setup>
definePageMeta({
  layout: "custom",
});
const route = useRoute();
// Fetch Single movie
const { data: movie, error } = await useFetch(`/api/movies/${route.params.id}`);

//Fetch Movie trailer
const { data: video } = await useFetch(
  `/api/movies/trailer/${route.params.id}`
);

const allVideo = toRaw(video.value.results);
console.log("All videos : ", allVideo);
const trailer = computed(() => {
  let trailer = [];
  for (let i = 0; i < allVideo.length; i++) {
    if (allVideo[i].type === "Trailer") {
      trailer.push(allVideo[i]);
    }
    return trailer[0].key;
  }
});
</script>
<template>
  <div>
    <MovieDetail
      :title="movie.title"
      :date="movie.release_date"
      :poster="movie.poster_path"
      :revenue="movie.revenue"
      :overview="movie.overview"
      :trailer="trailer"
    />
  </div>
</template>
