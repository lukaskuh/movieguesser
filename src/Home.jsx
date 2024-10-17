import { Link } from "react-router-dom"
import { useState } from "react";

export default function Home() {
    const [category, setCategory] = useState("");

    function handleCategory(event) {
        setCategory(event.target.value);
    }

    return (
        <div className="d-flex gap-2 justify-center items-center flex-col h-screen w-screen">
            <div className="w-fit">
                <select className="h-full" value={category} onChange={handleCategory} required>
                    <option value="" disabled>Choose category</option>
                    <option value="international-all-time">International movies - All time</option>
                    <option value="international-2000s">International movies - 2000s</option>
                    <option value="swedish">Swedish movies</option>
                </select>
                <Link className={`btn btn-primary ${!category && "disabled"}`} to={`/play/${category}`}>
                    Spela
                </Link>
            </div>
            <div className="w-fit">
                <Link className="btn btn-secondary" to="/how-to-play">
                    Hur spelar man?
                </Link>
            </div>
            
        </div>
    )
}