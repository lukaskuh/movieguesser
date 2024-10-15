import { useState } from "react";
import AutoList from "./AutoList";

export default function AutoCompleter({movies, makeGuess}) {

    const [currentGuess, setCurrentGuess] = useState();
    const [input, setInput] = useState("");
    const [focus, setFocus] = useState(false);

    console.log("INPUT: " + input);

    function handleClick(event) {
        makeGuess(currentGuess);
        setInput("");
    }

    return (
        <div className="bg-red-500 fixed bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col justify-center w-80">
            <AutoList input={input} setCurrentGuess={setCurrentGuess} setInput={setInput} focus={focus} setFocus={setFocus} movies={movies} />
            <div className="flex flex-row w-full">
                <input className="flex-grow" value={input} onChange={(event) => { setInput(event.target.value); setFocus(true); }} />
                <button onClick={handleClick}>Guess</button>
            </div>
        </div>
    );

}