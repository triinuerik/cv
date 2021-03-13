import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { slide as Menu, State as BurgerMenuState } from 'react-burger-menu';
import './BurgerMenu.scss'


export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (pathname: string) => location.pathname === pathname ? 'active' : '';

  const handleClick = () => setIsOpen(false);

  return (
    <Menu right isOpen={isOpen} onStateChange={(state: BurgerMenuState) => setIsOpen(state.isOpen)}>
      <Link to="/about" onClick={handleClick} className={`nav-item ${isActiveLink('/about')}`}>About me</Link>
      <Link to="/cv" onClick={handleClick} className={`nav-item ${isActiveLink('/cv')}`}>CV</Link>
    </Menu>
  )
}
