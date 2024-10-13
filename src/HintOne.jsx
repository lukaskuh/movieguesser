export default function HintOne({releaseYear, genre, country}) {

    return (

        <div className="w-full">
            <h1>Hint 1</h1>
            <div>
                <p className=""><span className="font-header">Release year: </span>{releaseYear.slice(0,4)}</p>
                <p className=""><span className="font-header">Genre: </span>{genre.map(genre => genre.name).join(", ")}</p>
                <p className=""><span className="font-header">Country: </span>{country}</p>
            </div>
        </div>

    );

}