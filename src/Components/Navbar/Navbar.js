import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../Images/logo.jpg';
import carticon from '../Images/carticon.jpeg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>AGRI PLUS</p>
      </div>
      <div className="nav-menu">
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/vegetables">Vegetables</a></li>
          <li><a href="/fruits">Fruits</a></li>
          <li><a href="/grains">Grains</a></li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <img src={carticon} alt="Cart" />
      </div>
    </div>
  );
};

export default Navbar;