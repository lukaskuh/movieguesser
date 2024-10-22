import { AnimatePresence, motion } from "framer-motion";

export default function AutoList({movies, input, setInput, focus, setFocus, setCurrentGuess}) {
    if (!input) {
        return null;
    }

    if (!focus) {
        return null;
    }

    const filtered = movies.filter(movie => movie.original_title.toLowerCase().includes(input.toLowerCase())).slice(0, 10);

    console.log(filtered)

    if (filtered.length === 0) {
        return null;
    }

    return (
        <ul className="w-full px-0 pt-2">
            <AnimatePresence>
            {filtered.map(
                movie =>
                    <motion.li className={"px-3 py-1 hover:bg-yellow-500 active:bg-yellow-600 overflow-hidden whitespace-nowrap w-full text-ellipsis"} key={movie.id} initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} onClick={() => { setCurrentGuess(movie.id); setInput(movie.original_title); setFocus(false); }}>{movie.original_title}</motion.li>
            )}
            </AnimatePresence>
        </ul>
    )

}