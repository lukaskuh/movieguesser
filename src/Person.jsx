import { motion } from "framer-motion";

const item = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 }
}

export default function Person({ name, profilePath }) {
    return (
        <motion.div className="flex flex-col items-center" variants={item}>
            <div className="w-[150px]">
                <img 
                    className="rounded-xl w-full h-auto object-cover bg-gray-200 flex items-center justify-center text-center"
                    src={`https://image.tmdb.org/t/p/w200/${profilePath}`}
                    alt={name}
                />
            </div>
            <p>{name}</p>
        </motion.div>
    );
}
