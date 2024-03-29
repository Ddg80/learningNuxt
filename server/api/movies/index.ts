export default defineEventHandler(async () => {
    try {
        const data = await $fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9252a363c4520be2fb02fb5a4d0bff80')
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        return null;     
    }
}) 