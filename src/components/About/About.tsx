import React from 'react';
import AboutMeImage from '../__assets__/about-me-image.jpg';
import './About.scss';

export const About: React.FC = () => {
  return(
    <div className='about'>
        <img src={AboutMeImage} alt='Picture of Triinu Erik' className='about-me-image'/>
        <div>
            I'm a frontend developer with 2 years of experience. 
        </div>
    </div>
  )
}
