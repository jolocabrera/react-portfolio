import React,{useState} from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { motion } from 'framer-motion';

function Portfolio(props) {
  const [projects] = useState([
    {
      name: 'Game Quest',
      id: 'game-quest',
      link: 'https://immense-dawn-89062.herokuapp.com/',
      github: 'https://github.com/El-Mariachi760/game-quest',
      category: 'primary-app',
      languages: 'MERN Stack'
    },
    {
      name: 'Pet Park',
      id: 'pet-park',
      link: 'https://radiant-eyrie-35854.herokuapp.com/',
      github: 'https://github.com/jolocabrera/pet-park',
      category: 'primary-app',
      languages: 'HTML / CSS / JS / Jquery / Node / Express / MySQL / Phaser / Tiled'
    },
    {
      name: 'Park Buddy',
      id: 'park-buddy',
      link: 'https://magoofy.github.io/project-1',
      github: 'https://github.com/magoofy/project-1',
      category: 'secondary-app',
      languages: 'HTML / JS / BootStrap / API'
    },
    {
      name: 'Google Book Search',
      id: 'book-search',
      link: 'https://salty-bayou-74149.herokuapp.com/',
      github: 'https://github.com/jolocabrera/book-search-engine',
      category: 'secondary-app',
      languages: 'MERN Stack'
    },
    {
      name: 'Run Buddy',
      id: 'run-buddy',
      link: 'https://jolocabrera.github.io/run-buddy/',
      github: 'https://github.com/jolocabrera/run-buddy',
      category: 'secondary-app',
      languages: 'HTML / CSS'
    },
    {
      name: 'Password Generator',
      id: 'password-generator',
      link: 'https://jolocabrera.github.io/password-generator/',
      github: 'https://github.com/jolocabrera/password-generator',
      category: 'secondary-app',
      languages: 'HTML / CSS / JS'
    }
  ]);


  return (
    <section id ="work">
    <motion.h2 
      initial={{ x: -100, opacity: 0, scale: 1 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
       className= "section-title">Work</motion.h2>
    <motion.div
          initial={{y:60, opacity: 0, scale: 1}}
          animate={{y:0, opacity:1, scale:1}}
          transition={{ duration:1 }}
           className="app-container">
      {projects.map((projects) => 
      <Project projects={projects} key={`${projects.id}`}></Project>)}
    </motion.div>
</section>
  );
}
export default Portfolio
;