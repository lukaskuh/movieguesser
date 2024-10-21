import { useLoaderData } from "react-router-dom"
import { useNavigate } from "react-router-dom"; 

export default function CorrectAnswer({movies, guessCount}) {

    const {movie} = useLoaderData()
    const navigate = useNavigate();

    function title() {
        if (guessCount <=2) {
            return "Correct!"
        } else {
            return "Wrong guess, the correct movie was: ";
        }
    }

    function handleClick() {
        navigate("/");
    }

    function handleRefresh() {
        navigate(0);
    }

    return (
        <div className="pb-10">
            <h1 className="pb-2">{title()}</h1>
            <div className="d-flex flex-col items-center">
                <h2>{movie.original_title}</h2>
                <img className="mb-8 rounded-xl w-[300px]" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.original_title}></img>
                <div className="d-flex flex-row gap-2">
                    <button className="btn btn-secondary" onClick={handleClick}>Home Page</button>
                    <button className="btn btn-primary" onClick={handleRefresh}>Play again</button>
                </div>
            </div>
        </div>
    )
}