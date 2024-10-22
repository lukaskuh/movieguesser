import { useState } from "react";
import AutoList from "./AutoList";

export default function AutoCompleter({movies, makeGuess}) {

    const [currentGuess, setCurrentGuess] = useState();
    const [input, setInput] = useState("");
    const [focus, setFocus] = useState(false);

    console.log("INPUT: " + input);

    function handleSubmit(event) {
        event.preventDefault();
        makeGuess(currentGuess);
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit} className="shadow-md shadow-gray-500/45 bg-white text-l rounded fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col justify-center w-11/12 max-w-[500px]">
            <AutoList 
                input={input} 
                setCurrentGuess={setCurrentGuess} 
                setInput={setInput} 
                focus={focus} 
                setFocus={setFocus} 
                movies={movies} 
            />
            <div className="flex flex-row w-full">
                <input 
                    className="rounded-l flex-grow bg-white !text-l px-3 py-0" 
                    value={input} 
                    onChange={(event) => { setInput(event.target.value); setFocus(true); }} 
                />
                <button 
                    type="submit"
                    className="btn btn-primary !rounded-l-none !text-l !px-4 !py-3"
                >
                    Guess
                </button>
            </div>
        </form>
    );

}