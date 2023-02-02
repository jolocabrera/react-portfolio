import React from 'react';
import profilePic from '../../assets/profilepicture.jpg';
import { motion } from "framer-motion"

function About() {
  return (
    <section id="about-me" >
      <motion.h2 
      initial={{ x: -100, opacity: 0, scale: 1 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
       className="section-title">Who am I?</motion.h2>
      <article>
        <p>
          I am a recent graduate from San Jose State University's Spring 2022 class.
          I am a general business major but also have a knack for programming due to my affinity for problem solving.
          In my tenor at San Jose State, although I am a General Business Major, I have geared my elective focus toward MIS based courses to fulfill my hunger for problem solving.
          Throughout these times I have added a number of skills to my repertoire such as experience in Salesforce, Python, and Microsoft Suite.
          <br/><br/>
          I have recently graduated from UC Berkeley's Full Stack Coding Boot Camp and am now proficient in a number of back end tools such as Express.js, MongoDB,Node.js, and GraphQL, as well as front end tools such as HTML, CSS, and React.
          <br/><br/>
          I am also the director of a dance company based in Daly City, CA. As a director of a dance company I am able to practice a number of other helpful skills such as team management, logistics, attention to detail, as well as exercise my creative mind.
          <br/><br/>
          I have learned to be extremely adaptable in any environment and am very efficient in using my skills to achieve any goals I hope to reach and overcome any obstacles that come my way.
        </p>
        <div className="img-container">
          <img src={profilePic}  alt='profile picture'/>
        </div>
      </article>
    </section>


  );
}

export default About;