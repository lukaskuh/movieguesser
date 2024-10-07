import { Link } from "react-router-dom"

export default function Home() {
    console.log("hem")

    return (
        <div className="d-flex gap-2">
            <Link className="btn btn-primary" to="/play">
                Spela
            </Link>
            <Link className="btn btn-secondary" to="/how-to-play">
                Hur spelar man?
            </Link>
        </div>
    )
}