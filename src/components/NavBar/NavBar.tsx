import React from 'react';
import './NavBar.scss'

export const NavBar: React.FC = () => {
  return(
    <div className='nav-bar'>
      <span className='nav-item'>CV</span>
      <span className='nav-item'>About me</span>
      <span className='nav-item'>Contact</span>
    </div>
  )
}
