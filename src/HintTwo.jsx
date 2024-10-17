import { motion } from "framer-motion";
import HintContainer from "./HintContainer";
import Person from "./Person";

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
}

export default function HintTwo({cast, directors}) {

    return (
        <HintContainer className="d-flex flex-col justify-center items-center w-full">
            <h1 className="max-w-xl w-full d-flex flex-row justify-start items-center">Hint 2</h1>
            <div className="d-flex w-full overflow-x-scroll">
                <motion.div className="inline-flex flex-row justify-center items-center gap-12 px-8 mx-auto" variants={container} initial="hidden" animate="show">
                    <motion.div className="flex flex-column" variants={container}>
                        <h4 className="">Director:</h4>
                        <div className="flex flex-row gap-3">
                            {directors.map(
                                director => <Person key={director.id} name={director.name} profilePath={director.profile_path} />
                            )}
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-column" variants={container}>
                        <h4 className="">Top cast:</h4>
                        <div className="flex flex-row gap-3">
                            {cast.map(
                                actor => <Person key={actor.id} name={actor.name} profilePath={actor.profile_path} />
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </HintContainer>
    )

}