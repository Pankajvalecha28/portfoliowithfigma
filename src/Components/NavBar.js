// NavBar.js
import React from 'react';
import '../Styles/NavBar.css';
import Logo from '../Images/Logo.png';
import { Link } from 'react-router-dom';


const NavBar = ({ data }) => {
  const { navbarLinks } = data;

  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar-links">
          {navbarLinks.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.text}
            </Link>
          ))}
        </div>
        <div className='btns'>
          <Link className='navbar-button' to='/homepage/contact' >Contact Me</Link>
          <Link className='navbar-button'  >Login</Link>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
