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
        <form onSubmit={handleSubmit} className="shadow-md shadow-gray-500/45 bg-white rounded fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col justify-center w-80">
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
                    className="rounded-l flex-grow px-2 bg-gray-100" 
                    value={input} 
                    onChange={(event) => { setInput(event.target.value); setFocus(true); }} 
                />
                <button 
                    type="submit"
                    className="btn btn-primary !rounded-l-none"
                >
                    Guess
                </button>
            </div>
        </form>
    );

}