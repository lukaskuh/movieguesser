import { motion } from "framer-motion";

const item = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 }
}

export default function Person({ name, profilePath }) {
    const defaultImage = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-19-user-grey-6c757d9bb462cf7b3ba3a9a0a807eb2b8e1b6f3a4a2a2834e811c54f77c987f2.svg";

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
