import { motion } from "framer-motion";

const item = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 }
}

export default function Person({ name, profilePath }) {
    const defaultImage = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";

    return (
        <motion.div className="flex flex-col items-center" variants={item}>
            <div className="w-[150px] h-[225px] d-flex justify-center items-center bg-gray-200 rounded-xl">
                <img 
                    className="rounded-xl w-full h-auto object-cover bg-gray-200 flex items-center justify-center text-center"
                    src={`https://image.tmdb.org/t/p/w200/${profilePath}`}
                    alt={name}
                    onError={(e) => e.target.src = defaultImage}
                />
            </div>
            <p>{name}</p>
        </motion.div>
    );
}
