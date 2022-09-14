import React, { useState } from 'react';

const Project = ({ projects }) => {
  return (
    <article className = {`${projects.category}`} id = {`${projects.id}`} >
    <a href={`${projects.link}`} target="_blank">
        <figcaption className="app-label">
            <h3>{projects.name}</h3>
            <p>
                {projects.languages}
            </p>
        </figcaption>
    </a>
</article>
  );
};

export default Project;
