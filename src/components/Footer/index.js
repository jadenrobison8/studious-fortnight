import React from 'react';

function Footer() {

   const icons = [
      {
         name: "fab fa-github",
         link: "https://github.com/jadenrobison8"
      },
      {
         name: "fab fa-linkedin",
         link: "http://linkedin.com/in/jaden-robison-a460b3184"
      },
   
   ]

   return (
      <footer className="flex-row px-1">
         {icons.map(icon => 
         (
            <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
         )   
         )}
      </footer>
   )
}

export default Footer;