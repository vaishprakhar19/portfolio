import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        Portfolio
      </div>
      <div className='navlinks'>
        <Link to="/" className="navlink">Home</Link>
        <Link to="/" className="navlink">About</Link>
        <Link to="/" className="navlink">Skills</Link>
        <Link to="/" className="navlink">Contacts</Link>
      </div>
    </div>
  )
}

export default Navbar