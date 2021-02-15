import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import './BurgerMenu.scss'


export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActiveLink = (pathname: string) => location.pathname === pathname ? 'active' : '';

  const handleClick = () => {
    setIsOpen(false);
  }

  return (
      <Menu right isOpen={isOpen} onStateChange={state => setIsOpen(state.isOpen)}>
        <Link to="/" onClick={handleClick} className={`nav-item ${isActiveLink('/')}`}>CV</Link>
        <Link to="/about" onClick={handleClick} className={`nav-item ${isActiveLink('/about')}`}>About me</Link>
        <Link to="/contact" onClick={handleClick} className={`nav-item ${isActiveLink('/contact')}`}>Contact</Link>
      </Menu>
  )
}
