import React from 'react';
// import { Link } from 'react-router-dom';
import "./navbar.css";


function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        Prakhar Vaish
      </div>
      <div className='navlinks'>
        <a href="#" className="navlink">Home</a>
        <a href="#projects" className="navlink">Projects</a>
        <a href="#skills" className="navlink">Skills</a>
        <a href="#education" className="navlink">Education</a>
        <a href="#contact" className="navlink">Contact</a>
      </div>
    </div>
  )
}

export default Navbar