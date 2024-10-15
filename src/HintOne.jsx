import HintContainer from "./HintContainer";
import { motion } from "framer-motion";

export default function HintOne({releaseYear, genre, countries}) {

    return (

        <HintContainer className="w-full max-w-xl" >
            <h1>Hint 1</h1>
            <div>
                <p className=""><span className="font-header">Release year: </span>{releaseYear.slice(0,4)}</p>
                <p className=""><span className="font-header">Genre: </span>{genre.map(genre => genre.name).join(", ")}</p>
                <p className=""><span className="font-header">Country: </span>
                    {countries.map(country =>
                        (
                            <span key={country}>{country} <img className="inline" src={`https://flagsapi.com/${country}/flat/24.png`} /></span>
                            
                        )
                    )}
                 </p>
            </div>
        </HintContainer>

    );

}