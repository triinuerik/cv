import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './NavBar.scss'

export const NavBar: React.FC = () => {
  const location = useLocation();

  const isActiveLink = (pathname: string) => location.pathname === pathname ? 'active' : '';

  return (
    <nav className='nav-bar'>
      <Link to="/" className={`nav-item ${isActiveLink('/')}`}>CV</Link>
      <Link to="/about" className={`nav-item ${isActiveLink('/about')}`}>About me</Link>
      <Link to="/contact" className={`nav-item ${isActiveLink('/contact')}`}>Contact</Link>
    </nav>    
  )
}
