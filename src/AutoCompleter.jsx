import { useState } from "react";

export default function AutoCompleter({movies}) {

    const [currentGuess, setCurrentGuess] = useState("");
    const [input, setInput] = useState();

    return (
        <div>
            <input></input>
            <list>
                
            </list>
            <button>Guess</button>
        </div>
    );

}