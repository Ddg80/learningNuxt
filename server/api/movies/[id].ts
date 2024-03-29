export default defineEventHandler(async (event) => {
    const {movieKey} = useRuntimeConfig()
    const movieId = event.context.params?.id
    try {
        const data = await $fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${movieKey}&language=fr-FR`)
        // console.log(data);
        return data
    } catch (error) {
        console.error(error);
        return null;     
    }
})