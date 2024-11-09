// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"></Link>
      </div>
      <div className="navbar-links">
        <Link className="navbar-button" to="/">Home</Link>
        <Link className="navbar-button" to="/signup">Sign Up</Link>
        <Link className="navbar-button" to="/courses">Courses</Link>
        <Link className="navbar-button" to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
