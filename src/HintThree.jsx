import HintContainer from "./HintContainer";

export default function HintThree({plot}) {

    return (
        <HintContainer className={"max-w-xl pb-20"}>
            <h1>Hint 3</h1>
            <h4>Plot:</h4>
            <p>{plot}</p>
        </HintContainer>
    )
}