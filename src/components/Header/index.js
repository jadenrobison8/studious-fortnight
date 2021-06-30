import React from 'react';
//import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

   return (
      <header className="flex-row space-between px-1">
         <h1>Jaden Robison</h1>
         {props.children}
      </header>
   );
}

export default Header;