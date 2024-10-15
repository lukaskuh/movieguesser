import HintContainer from "./HintContainer";
import Person from "./Person";

export default function HintTwo({cast, directors}) {


    return (
        <HintContainer className="d-flex flex-col justify-center items-center">
            <h1 className="max-w-xl w-full d-flex flex-row justify-center items-center">Hint 2</h1>
            <div className="flex flex-row gap-12 overflow-scroll w-screen">
                <div className="flex flex-column">
                    <h4 className="">Director:</h4>
                    <div>
                        {directors.map(
                            director => <Person key={director.id} name={director.name} profilePath={director.profile_path} />
                        )}
                    </div>
                </div>
                <div className="flex flex-column">
                    <h4 className="">Top cast:</h4>
                    <div className="flex flex-row gap-3">
                        {cast.map(
                            actor => <Person key={actor.id} name={actor.name} profilePath={actor.profile_path} />
                        )}
                    </div>
                </div>
                
            </div>
        </HintContainer>
    )

}