import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
//import Buddy from '../../assets/projects/run-buddy.jpg'
import { pictures } from '../../assets/projects';

function Project({ project }) {
   
   const { name, repo, link, description } = project;
   
   return (
      <div className="project" key={name}>
         <img 
            src={projects.name}
            alt={removeHyphensAndCapitalize(name)}
            className="project-bg"
         />
         <div className="project-text">
            <h3>
               <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
               <a href={repo}>
                  <i className="fab fa-github"></i>
               </a>
            </h3>
            <p>{description}</p>
         </div>
      </div>
   );
}

export default Project;