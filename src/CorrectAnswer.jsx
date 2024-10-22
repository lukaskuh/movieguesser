import { useLoaderData } from "react-router-dom"
import { useNavigate } from "react-router-dom"; 

export default function CorrectAnswer({guessCount}) {

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
        <div className="pb-10 flex flex-col h-full">
            <h2 className="pb-2">{title()}</h2>
            <div className="flex flex-col items-center flex-grow">
                <h3>{movie.original_title}</h3>
                <div className="mb-8 flex justify-center items-center">
                    <img
                        className="rounded-xl h-[40vh] object-contain"
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.original_title}
                    />
                </div>
                <div className="flex flex-row gap-2">
                    <button className="btn btn-secondary" onClick={handleClick}>Home Page</button>
                    <button className="btn btn-primary" onClick={handleRefresh}>Play again</button>
                </div>
            </div>
        </div>
    )
}