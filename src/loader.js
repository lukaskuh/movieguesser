import movies from './assets/movies.json' assert { type: 'json' }
import getRandomInt from './random.js';

// const movies = JSON.parse(require('./assets/movies.json'));

export async function movieLoader() {
    const movieId = movies[getRandomInt(0, movies.length)].id;
    
    
    const movie = await fetch(`http://www.omdbapi.com/?apikey=2bb06440&i=tt1285016`)
            .then((response) => response.json());
    

    let options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGQyZDYwZmFlZjgwZTIzNWIyMWVkYTc2NWQzNWRlMiIsIm5iZiI6MTcyODMxMDQ3NS41Nzg2ODQsInN1YiI6IjY3MDNkOTBhN2NmZWE2ZjIwMjczZWI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2pYdq0yz46dOjByLcFLZjJ3ULZVlTolIbUeYdM7etw'
        }
    }; 
    
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGQyZDYwZmFlZjgwZTIzNWIyMWVkYTc2NWQzNWRlMiIsIm5iZiI6MTcyODMxMDQ3NS41Nzg2ODQsInN1YiI6IjY3MDNkOTBhN2NmZWE2ZjIwMjczZWI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v2pYdq0yz46dOjByLcFLZjJ3ULZVlTolIbUeYdM7etw'
        }
        };
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    

    return movie;
}