export default function Person({name, profilePath}) {

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${profilePath}`}/>
            <p>{name}</p>
        </div>
        
    )

}