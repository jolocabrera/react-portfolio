import React, { useState } from "react";
import githubLogo from "../../assets/GitHub-Mark-64px.png";

const Project = ({ projects }) => {

  return (
    <article
      className={`${projects.category}`}
      id={`${projects.id}`}
    >
      <div className="opacity-tint">

        <figcaption className="app-label">
          {/* link to app */}
          <a href={`${projects.link}`} target="_blank" rel="noreferrer">
            <h3 className="project-title">{projects.name}</h3>
          </a>

          {/* link to github */}
          <a href={`${projects.github}`} target="_blank" rel="noreferrer">
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className="githubimage"
              ></img>
          </a>
        </figcaption>

        {/*languages used */}
        <p className="project-language">{projects.languages}</p>
      </div>
    </article>
  );
};

export default Project;
