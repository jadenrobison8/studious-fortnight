import React from 'react';
import Profile from '../../assets/profile/profile.jpg';

function About() {
   return (
      <section className="my-5">
         <div className="my-2">
            <div className="profile-img my-5">
               <img src={Profile} alt=" " style={{ fontSize: "96px" }}></img>
            </div>
            <p>
               I am a MERN Full Stack Developer, graduated from the Univerty of Utah Coding Bootcamp. I have an Associates degree in Pre-Engineering
            </p>
            <p>
               I have learned many languages any technologies through engineering, including: Java, C++, Python, R, VHDL, and many others. 
            </p>
         </div>
      </section>
   );
}

export default About;