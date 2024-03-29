export default defineEventHandler(async (event) => {
    const { movieKey } = useRuntimeConfig()
    const { searchInput } = getQuery(event)
    try {
        const data = await $fetch(`https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&language=fr-FR&query=${searchInput}&include_adult=false`)
        return data
    } catch (error) {
        console.error(error)
        return null
    }
})