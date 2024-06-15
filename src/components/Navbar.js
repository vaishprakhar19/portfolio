import React from 'react';
import { Link } from 'react-scroll';
import "./navbar.css";


function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        Prakhar Vaish
      </div>
      <div className='navlinks'>
        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} className="navlink">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true}  duration={500} className="navlink">Skills</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="navlink">Projects</Link>
        <Link activeClass="active" to="education" spy={true} smooth={true} duration={500} className="navlink">Education</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="navlink">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar;
