import React from 'react';
// import { Link } from 'react-router-dom';
import "./navbar.css";


function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        Portfolio
      </div>
      <div className='navlinks'>
        <a href="#" className="navlink">Home</a>
        <a href="#" className="navlink">About</a>
        <a href="#skills" className="navlink">Skills</a>
        <a href="#" className="navlink">Contacts</a>
      </div>
    </div>
  )
}

export default Navbar