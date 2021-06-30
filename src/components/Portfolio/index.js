import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {
   const [projects] = useState([
      {
         name: 'run-buddy',
         description: 'HTML/CSS',
         link: 'https://jadenrobison8.github.io/run-buddy/',
         repo: 'https://github.com/jadenrobison8/run-buddy'
      },
      {
         name: 'entertainment-720',
         description: 'HTML/CSS/JS',
         link: 'https://lylekilson.github.io/entertainment-720/',
         repo: 'https://github.com/LyleKilson/entertainment-720'
      },
      {
         name: 'plant-daddy',
         description: 'MVC, MySQL JS full stack application',
         link: 'https://uofu-plant-daddy.herokuapp.com/',
         repo: 'https://github.com/alyssawinn/plant-daddy'
      },
      // {
      //    name: 'Wallpaper-market',
      //    description: 'MERN SPA',
      //    link: '',
      //    repo: ''
      // },
      // {
      //    name: '',
      //    description: '',
      //    link: '',
      //    repo: ''
      // },
   ]);

   return (
      <div>
        <div className="flex-row">
          {projects.map((project, idx) => (
            <Project
              project={project}
              key={"project" + idx}
            />
          ))}
        </div>
      </div>
    );
};

export default Portfolio;