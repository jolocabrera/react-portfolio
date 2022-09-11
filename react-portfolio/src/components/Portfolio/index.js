import React,{useState} from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const [projects] = useState([
    {
      name: 'Game Quest',
      id: 'game-quest',
      link: 'https://game-quest-v01.herokuapp.com/',
      category: 'primary-app',
      languages: 'MongoDB/Express.js/React/Node.js'
    },
    {
      name: 'Pet Park',
      id: 'pet-park',
      link: 'https://radiant-eyrie-35854.herokuapp.com/',
      category: 'secondary-app',
      languages: 'HTML/CSS/JS/Jquery/Node/Express/Sequelize/MySQL/Phaser/Tiled'
    },
    {
      name: 'Park Buddy',
      id: 'park-buddy',
      link: 'https://magoofy.github.io/project-1',
      category: 'secondary-app',
      languages: 'HTML/CSS/JS/BootStrap/API'
    },
    {
      name: 'Run Buddy',
      id: 'run-buddy',
      link: 'https://jolocabrera.github.io/run-buddy/',
      category: 'secondary-app',
      languages: 'HTML/CSS'
    },
    {
      name: 'Password Generator',
      id: 'password-generator',
      link: '',
      category: 'secondary-app',
      languages: 'HTML/CSS/JS'
    }
  ]);


  return (
    <section id ="work">
    <h2 className= "section-title">Work</h2>
    <div className="app-container">
      {projects.map((projects) => 
      <Project projects={projects}></Project>)}
    </div>
</section>
  );
}
export default Portfolio
;