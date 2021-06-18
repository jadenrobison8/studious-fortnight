import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

   return (
      <header className="flex-row space-between px-1">
         <h1>Lerantino</h1>
         <img></img>
         {props.children}
      </header>
   );
}

export default Header;