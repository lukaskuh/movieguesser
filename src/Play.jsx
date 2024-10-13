import { useLoaderData } from "react-router-dom"
import HintOne from "./HintOne"
import HintTwo from "./HintTwo";
import HintThree from "./HintThree";
import AutoCompleter from "./AutoCompleter";

export default function Play() {
    const data = useLoaderData();

    console.log("play: " + data.movie.original_title);
    console.log(data.movie);
    console.log(data.crew);

    return (
        <div>
            <HintOne releaseYear={data.movie.release_date} genre={data.movie.genres} country={data.movie.origin_country} />
            <HintTwo directors={data.crew.directors} cast={data.crew.cast} />
            <HintThree plot={data.movie.overview} />
            <AutoCompleter movies={data.movies} />
        </div>
    )
}