import React from "react";
import { motion } from "framer-motion";


function Resume () {


    return(
        <section id="resume">
            <motion.h2 
      initial={{ x: -100, opacity: 0, scale: 1 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
       className="section-title">
               Resume
            </motion.h2>
            <motion.div
                  initial={{y:50, opacity: 0, scale: 1}}
                  animate={{y:0, opacity:1, scale:1}}
                  transition={{ duration:1 }}
                   className="resume-container">
                <a href="https://docs.google.com/document/d/1qyo8jPAfWPPD93b5Bws9TBSOcANItekmWKk83PakTOk/edit?usp=sharing" target="_blank" rel="noopener noreferrer" id="resume-button">View downloadable resume</a>
                </motion.div>
        </section>
    );
}

export default Resume;