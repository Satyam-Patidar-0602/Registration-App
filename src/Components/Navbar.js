// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
        {/* <li><Link to="/about">About</Link></li> */}
        <li><Link to="/Candidates">Candidates</Link></li>
        {/* <li><Link to="/photo-gallery">Photo Gallery</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
