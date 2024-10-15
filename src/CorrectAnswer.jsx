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

    return (
        <div className="pb-10">
            <h1 className="pb-2">{title()}</h1>
            <h3>{movie.original_title}</h3>
            <div>
                <img className="pb-8" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.original_title}></img>
            </div>
            <button className="btn btn-primary !rounded-l-none" onClick={handleClick}>Home Page</button>
        </div>
    )
}