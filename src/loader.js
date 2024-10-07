export async function movieLoader() {
    const movie = await fetch(`http://www.omdbapi.com/?apikey=2bb06440&i=tt1285016`)
            .then((response) => response.json());


    return movie;
}