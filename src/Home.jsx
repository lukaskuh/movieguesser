import { Link } from "react-router-dom"
import { useState } from "react";

export default function Home() {
    const [category, setCategory] = useState("");

    function handleCategory(event) {
        setCategory(event.target.value);
    }

    return (
        <div className="d-flex gap-2 justify-center items-center flex-col h-screen w-screen">
            <h1>Guess The Movie</h1>
            <div className="w-fit d-flex flex-row items-center">
                <select className="h-full rounded-l" value={category} onChange={handleCategory} required>
                    <option value="" disabled>Choose category</option>
                    <option value="international-all-time">International movies - All time</option>
                    <option value="international-2000s">International movies - 2000s</option>
                    <option value="swedish">Swedish movies</option>
                </select>
                <Link className={`btn btn-primary !rounded-l-none ${!category && "disabled"}`} to={`/play/${category}`}>
                    Play
                </Link>
            </div>
            <div className="w-fit">
                <Link className="btn btn-secondary" to="/how-to-play">
                    How to play
                </Link>
            </div>
            
        </div>
    )
}