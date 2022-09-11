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
      name: 'Game Quest',
      id: 'game-quest',
      link: 'https://game-quest-v01.herokuapp.com/',
      category: 'primary-app',
      languages: 'MongoDB/Express.js/React/Node.js'
    },
    {
      name: 'Game Quest',
      id: 'game-quest',
      link: 'https://game-quest-v01.herokuapp.com/',
      category: 'primary-app',
      languages: 'MongoDB/Express.js/React/Node.js'
    },
    {
      name: 'Game Quest',
      id: 'game-quest',
      link: 'https://game-quest-v01.herokuapp.com/',
      category: 'primary-app',
      languages: 'MongoDB/Express.js/React/Node.js'
    },
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