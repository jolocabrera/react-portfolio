import React,{useState} from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const [projects] = useState([
    {
      name: 'Game Quest',
      id: 'game-quest',
      link: 'https://game-quest-v01.herokuapp.com/',
      github: 'https://github.com/El-Mariachi760/game-quest',
      category: 'primary-app',
      languages: 'MongoDB/Express.js/React/Node.js'
    },
    {
      name: 'Pet Park',
      id: 'pet-park',
      link: 'https://radiant-eyrie-35854.herokuapp.com/',
      github: 'https://github.com/jolocabrera/pet-park',
      category: 'primary-app',
      languages: 'HTML/CSS/JS/Jquery/Node/Express/Sequelize/MySQL/Phaser/Tiled'
    },
    {
      name: 'Park Buddy',
      id: 'park-buddy',
      link: 'https://magoofy.github.io/project-1',
      github: 'https://github.com/magoofy/project-1',
      category: 'secondary-app',
      languages: 'HTML/CSS/JS/BootStrap/API'
    },
    {
      name: 'Google Book Search',
      id: 'book-search',
      link: 'https://salty-bayou-74149.herokuapp.com/',
      github: 'https://github.com/jolocabrera/book-search-engine',
      category: 'secondary-app',
      languages: 'MongoDB/Express/React/Node'
    },
    {
      name: 'Run Buddy',
      id: 'run-buddy',
      link: 'https://jolocabrera.github.io/run-buddy/',
      github: 'https://github.com/jolocabrera/run-buddy',
      category: 'secondary-app',
      languages: 'HTML/CSS'
    },
    {
      name: 'Password Generator',
      id: 'password-generator',
      link: 'https://jolocabrera.github.io/password-generator/',
      github: 'https://github.com/jolocabrera/password-generator',
      category: 'secondary-app',
      languages: 'HTML/CSS/JS'
    }
  ]);


  return (
    <section id ="work">
    <h2 className= "section-title">Work</h2>
    <div className="app-container">
      {projects.map((projects) => 
      <Project projects={projects} key={`${projects.id}`}></Project>)}
    </div>
</section>
  );
}
export default Portfolio
;