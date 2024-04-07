<script setup lang="ts">
defineProps(['title', 'date', 'poster', 'revenue', 'overview', 'trailer'])
</script>
<template>
    <div class="gird sm:grid-cols-3 gap-7 justify-items-center m-10">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img class="h-400 w-full object-cover"  :src="`http://image.tmdb.org/t/p/w500/${poster}`" alt="Placeholder image">
        </div>
        <div class="sm:col-span-2 mx-6">
            <h1 class="font-bold text-2xl mb-5 mt-4">{{ title }}</h1>
            <h3 class="font-semibold text-lg mb-5">Release Date: {{ date }}</h3>
            <p class="text-gray-500 text-md mb-8">
                {{ overview }}
            </p>
            <p class="text-gray-500 text-md">Revenue: ${{ revenue }}</p>
            <div class="mt-6">
                <NuxtLink 
                :to="`https://www.youtube.com/watch?v=${trailer}`"
                target="_blank"
                class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded"
                >
                watch trailer
            </NuxtLink>
            <button  class="bg-rose-500 hover:bg-rose-500 text-white font-medium py-2 px-4 rounded m-5">
                Buy Now
            </button>
            </div>
        </div>
    </div>
</template>