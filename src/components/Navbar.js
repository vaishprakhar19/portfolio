import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";
const logoPV = process.env.PUBLIC_URL + '/resources/PV.png';

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logoPV} alt="PV"></img>
        Prakhar Vaish
      </div>
      {/* Toggle button for small screens */}
      <div className='toggle-button' onClick={toggleNavLinks}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
      </div>
      {/* Navlinks */}
      <div className={`navlinks ${showNavLinks ? 'show' : ''}`}>
        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className="navlink">Home</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="navlink">Projects</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} className="navlink">Skills</Link>
        <Link activeClass="active" to="education" spy={true} smooth={true} duration={500} className="navlink">Education</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="navlink">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
