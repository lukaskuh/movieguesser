import internationalMovies from './assets/movies_all_time.json' assert { type: 'json' }
import international2000Movies from './assets/movies_2000.json' assert { type: 'json' }
import swedishMovies from './assets/movies_swedish.json' assert { type: 'json' }
import getRandomInt from './random.js';


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


export async function movieLoader({ params }) {
    const { category } = params;

    let movies;

    if (category === 'international-all-time') {
        movies = internationalMovies;
    } else if (category === 'international-2000s') {
        movies = international2000Movies;
    } else if (category === 'swedish') {
        movies = swedishMovies;
    } else {
        throw new Error('Invalid category');  // Handle invalid category
    }


    const movieId = movies[getRandomInt(0, movies.length)].id;
    

    let options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: API_KEY
        }
    }; 
    
    const moviePromise = fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .catch(err => console.error(err));

    options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: API_KEY
        }
        };
        
    const crewPromise = fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(data => {
            return {
                cast: data.cast.sort((a, b) => b.popularity - a.popularity).slice(0, 5),
                directors: data.crew.filter(person => person.job === "Director")
            }
        }
        )
        .catch(err => console.error(err));
    
    const data = await Promise.all([moviePromise, crewPromise])

    return {movie: data[0], crew: data[1], movies};
}