import Person from "./Person";

export default function HintTwo({cast, directors}) {


    return (
        <div>
            <h1>Hint Two</h1>
            <div>
                <div>
                    <h3 className="">Director:</h3>
                    {directors.map(
                        director => <Person key={director.id} name={director.name} profilePath={director.profile_path} />
                    )}
                </div>
                <div>
                    <h3 className="">Top cast:</h3>
                    {cast.map(
                        actor => <Person key={actor.id} name={actor.name} profilePath={actor.profile_path} />
                    )}
                </div>
                
            </div>
        </div>
    )

}