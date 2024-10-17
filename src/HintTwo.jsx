import { motion } from "framer-motion";
import HintContainer from "./HintContainer";
import Person from "./Person";

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
}

export default function HintTwo({cast, directors}) {

    return (
        <HintContainer className="d-flex flex-col justify-center items-center w-full">
            <h1 className="max-w-xl w-full d-flex flex-row justify-start items-center">Hint 2</h1>
            <div className="w-full overflow-x-scroll">
                <div className="inline-flex flex-row justify-center items-center gap-12">
                    <motion.div className="flex flex-column" variants={container} initial="hidden" animate="show">
                        <h4 className="">Director:</h4>
                        <div className="flex flex-row gap-3">
                            {directors.map(
                                director => <Person key={director.id} name={director.name} profilePath={director.profile_path} />
                            )}
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-column" variants={container} initial="hidden" animate="show">
                        <h4 className="">Top cast:</h4>
                        <div className="flex flex-row gap-3">
                            {cast.map(
                                actor => <Person key={actor.id} name={actor.name} profilePath={actor.profile_path} />
                            )}
                        </div>
                    </motion.div>
                </div>
                {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent"></div>

                {/* Fade effect on the right */}
                {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent"></div> */}
            </div>
        </HintContainer>
    )

}