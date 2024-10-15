import { motion } from "framer-motion";

export default function HintContainer({children, ...props}) {

    return (
        <motion.div initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} {...props}>
            {children}
        </motion.div>
    )
}