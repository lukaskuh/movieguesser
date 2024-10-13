import { AnimatePresence, motion } from "framer-motion";

export default function AutoList({movies, input, setInput, setCurrentGuess}) {
    if (!input) {
        return null;
    }

    const filtered = movies.filter(movie => movie.original_title.includes(input)).slice(0, 10);

    console.log(filtered)

    return (
        <ul>
            <AnimatePresence>
            {filtered.map(
                movie =>
                    <motion.li key={movie.id} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} onClick={() => { setCurrentGuess(movie.id); setInput(movie.original_title) }}>{movie.original_title}</motion.li>
            )}
            </AnimatePresence>
        </ul>
    )

}