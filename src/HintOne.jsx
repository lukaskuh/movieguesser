export default function HintOne({releaseYear, genre, country}) {

    return (

        <div>
            <h1>Hint 1</h1>
            <div>
                <p className=""><span className="">Release year: </span>{releaseYear.slice(0,4)}</p>
                <p className=""><span className="">Genre: </span>{genre.map(genre => genre.name).join(", ")}</p>
                <p className=""><span className="">Country: </span>{country}</p>
            </div>
        </div>

    );

}