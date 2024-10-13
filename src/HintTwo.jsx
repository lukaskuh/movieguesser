import Person from "./Person";

export default function HintTwo({cast, directors}) {


    return (
        <div>
            <h1>Hint Two</h1>
            <div>
                <div>
                    <h3 className="">Director:</h3>
                    {directors.map(
                        director => <Person name={director.name} profilePath={director.profile_path} />
                    )}
                </div>
                <div>
                    <h3 className="">Top cast:</h3>
                    {cast.map(
                        actor => <Person name={actor.name} profilePath={actor.profile_path} />
                    )}
                </div>
                
            </div>
        </div>
    )

}