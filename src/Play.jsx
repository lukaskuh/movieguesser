import { useLoaderData } from "react-router-dom"
import HintOne from "./HintOne"
import HintTwo from "./HintTwo";
import HintThree from "./HintThree";
import AutoCompleter from "./AutoCompleter";
import { useState, useRef, useEffect } from "react";
import CorrectAnswer from "./CorrectAnswer";
import { AnimatePresence, motion } from "framer-motion";



export default function Play() {

    const data = useLoaderData();
    const [guessCount, setCurrentGuess] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const hintEndRef = useRef();
    
    const [showToaster, setShowToaster] = useState(false);

    function makeGuess(guess) {
        if (guess === data.movie.id) {
            setShowModal(true);
        } else {
            setCurrentGuess(guessCount + 1);
            if (guessCount === 2) {
                setShowModal(true);
            } else {
                setShowToaster(true);
                setTimeout(() => setShowToaster(false), 1500);
            }
        }
    }

    useEffect(() => {
        hintEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [guessCount])


    return (
        <div className="p-3 d-flex flex-col items-center justify-center w-full margin mx-auto">
            <AnimatePresence>
                {showToaster && (
                    <motion.div
                        key="toast"
                        id="toast"
                        initial={{ y: -50, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{opacity: 0 }}
                        className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg"
                    >
                        Wrong!
                    </motion.div>
                )}
                <HintOne releaseYear={data.movie.release_date} genre={data.movie.genres} countries={data.movie.origin_country} key={1}/>
                {guessCount >= 1 && <HintTwo directors={data.crew.directors} cast={data.crew.cast} key={2} />}
                {guessCount >= 2 && <HintThree plot={data.movie.overview} key={3} />}
                <div ref={hintEndRef}></div>
            </AnimatePresence>
            <AutoCompleter movies={data.movies} makeGuess={makeGuess} />

            {showModal && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div initial={{y: 500}} animate={{y:0}} className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">

                        <button
                            className="absolute bg-transparent top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl p-2"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>

                        <CorrectAnswer guessCount={guessCount} />
                    </motion.div>
                </motion.div>
            )}

        </div>
    )
}