<script setup>
definePageMeta({
  layout: "custom",
});
const movieId = ref(123);
const title = ref("Kung Fu Panda 4");
const date = ref("2024-03-02");
const poster = ref(
  "https://www.cinehorizons.net/sites/default/files/affiches/671046041-kung-fu-panda-4.jpg"
);
const revenue = ref(45467445)
const overview = ref(
    "After three adventures in which the dragon warrior Po fought the most formidable masters of evil thanks to unparalleled courage and martial arts skills, fate will knock again on his door to ... invite him to finally rest. More specifically, to be appointed spiritual leader of the Peace Valley. This poses some obvious problems. "
)
</script>
<template>
  <div>
    <MovieDetail :title="title" :date="date" :poster="poster" :revenue="revenue" :overview="overview"/>
  </div>
</template>
