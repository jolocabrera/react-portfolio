import React from 'react';
import profilePic from '../../assets/profilepicture.jpg';
function About() {
  return (
    <section id="about-me" >
      <h2 className="section-title">Who am I?</h2>
      <article>
        <p>
          I am currently a graduating senior at San Jose State University, set to graduate Spring 2022.
          I am a general business major but also have a knack for programming due to my affinity for problem solving.
          In my tenor at San Jose State, although I am a General Business Major, I have geared my elective focus toward MIS based courses to fulfill my hunger for problem solving.
          Throughout these times I have added a number of skills to my repertoire such as experience in Salesforce, Python, Microsoft Word, Excel, and PowerPoint.
          I am currently enrolled in UC Berkeley's Coding Boot Camp to further my knowledge in the field and add to my list of skills and abilities.
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