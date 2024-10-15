import { useLoaderData } from "react-router-dom"
import HintOne from "./HintOne"
import HintTwo from "./HintTwo";
import HintThree from "./HintThree";
import AutoCompleter from "./AutoCompleter";
import { useState } from "react";

export default function Play() {
    const data = useLoaderData();
    const [guessCount, setCurrentGuess] = useState(0);

    function makeGuess(guess) {
        if (guess === data.movie.id) {
            alert("Correct!");
        } else {
            alert("False :(");
        }

        setCurrentGuess(guessCount + 1);
    }

    console.log("play: " + data.movie.original_title);
    console.log(data.movie);
    console.log(data.crew);

    return (
        <div className="max-w-xl w-full margin mx-auto bg-gray-400">
            <HintOne releaseYear={data.movie.release_date} genre={data.movie.genres} countries={data.movie.origin_country} />
            {guessCount >= 1 && <HintTwo directors={data.crew.directors} cast={data.crew.cast} />}
            {guessCount >= 2 && <HintThree plot={data.movie.overview} />}
            <AutoCompleter movies={data.movies} makeGuess={makeGuess} />
        </div>
    )
}