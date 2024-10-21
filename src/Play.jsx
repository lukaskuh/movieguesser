import { useLoaderData } from "react-router-dom"
import HintOne from "./HintOne"
import HintTwo from "./HintTwo";
import HintThree from "./HintThree";
import AutoCompleter from "./AutoCompleter";
import { useState } from "react";
import CorrectAnswer from "./CorrectAnswer";
import { AnimatePresence } from "framer-motion";

export default function Play() {

    const data = useLoaderData();
    const [guessCount, setCurrentGuess] = useState(0);
    const [showModal, setShowModal] = useState(false);

    function makeGuess(guess) {
        if (guess === data.movie.id) {
            setShowModal(true);
        } else {
            setCurrentGuess(guessCount + 1);
            if (guessCount === 2) {
                setShowModal(true);
            } else {
                alert("Wrong guess");
            }
        }
    }
    
    console.log("play: " + data.movie.original_title);
    console.log(data.movie);
    console.log(data.crew);

    return (
        <div className="p-3 d-flex flex-col items-center justify-center w-full margin mx-auto bg-gray-400">
            <AnimatePresence>
                <HintOne releaseYear={data.movie.release_date} genre={data.movie.genres} countries={data.movie.origin_country} key={1}/>
                {guessCount >= 1 && <HintTwo directors={data.crew.directors} cast={data.crew.cast} key={2} />}
                {guessCount >= 2 && <HintThree plot={data.movie.overview} key={3} />}
            </AnimatePresence>
            <AutoCompleter movies={data.movies} makeGuess={makeGuess} />

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">

                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl p-2"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>

                        <CorrectAnswer guessCount={guessCount} />
                    </div>
                </div>
            )}

        </div>
    )
}