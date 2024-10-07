import { useLoaderData } from "react-router-dom"

export default function Play() {
    const movieData = useLoaderData();

    console.log(movieData);

    return (<p>Play</p>)
}