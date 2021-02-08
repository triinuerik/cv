import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './NavBar.scss'

export const NavBar: React.FC = () => {
  return(
    <nav className='nav-bar'>
      <Link to="/" className='nav-item'>CV</Link>
      <Link to="/about" className='nav-item'>About me</Link>
      <Link to="/contact" className='nav-item'>Contact</Link>
    </nav>    
  )
}
