import React from "react"
import { motion } from "framer-motion";

function Hero() {

    return (
        <motion.div 
        initial={{y:-350}}
        animate={{y:0}}
        transition={{duration: 1}}
        className="hero">
        </motion.div>
    );
}

export default Hero;
