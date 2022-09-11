import React, { useState } from 'react';

const Project = ({ projects }) => {
  console.log(projects)
  return (
    <div>
    <article className = {`${projects.category}`} id = {`${projects.id}`} key={`${projects.id}`}>
    <a href={`${projects.link}`} target="_blank">
        <figcaption className="app-label">
            <h3>{projects.name}</h3>
            <p>
                {projects.languages}
            </p>
        </figcaption>
    </a>
</article>
    </div>
  );
};

export default Project;
