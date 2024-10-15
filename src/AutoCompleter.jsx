import { useState } from "react";
import AutoList from "./AutoList";

export default function AutoCompleter({movies, makeGuess}) {

    const [currentGuess, setCurrentGuess] = useState();
    const [input, setInput] = useState("");
    console.log("INPUT: " + input);

    function handleClick(event) {
        makeGuess(currentGuess);
        setInput("");
    }

    return (
        <div className="fixed flex bottom-2 inset-x-0 flex-col justify-center">
            <AutoList input={input} setCurrentGuess={setCurrentGuess} setInput={setInput} movies={movies} />
            <div className="flex flex-row bg-white w-80">
                <input value={input} onChange={(event) => setInput(event.target.value)} />
                <button onClick={handleClick}>Guess</button>
            </div>
        </div>
    );

}