import React from 'react';
import { IoIosMail, IoIosCall, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import AboutMeImage from '../__assets__/about-me-image.jpg';
import './About.scss';


export const About: React.FC = () => {
  return (
    <div className='about'>
      <img src={AboutMeImage} alt='Author, Triinu Erik' className='about-me-image' />
      <div className='about-me-text'>
        <p>
          Hello, I'm Triinu.
          I'm a front-end developer with 2 years of experience in building web applications.
          I love and enjoy programming in React, but I also feel comfortable with Java and Python.
          In my free time I enjoy running, playing ukulele and video games and teaching tricks to my 3 rats.
        </p>
        <div className='contact'>
          <div className='contact-row'>
            <div className='contact-icon'><IoIosCall /></div>
            <div>+372 59 022 850</div>
          </div>
          <div className='contact-row'>
            <div className='contact-icon'><IoIosMail /></div>
            <div>triinuerik96@gmail.com</div>
          </div>
          <div className='contact-row'>
            <div className='contact-icon'><IoLogoLinkedin /></div>
            <a href='https://www.linkedin.com/in/triinu-erik/' target='_blank' rel='noreferrer'>https://www.linkedin.com/in/triinu-erik/</a>
          </div>
          <div className='contact-row'>
            <div className='contact-icon'><IoLogoGithub /></div>
            <a href='https://github.com/triinuerik' target='_blank' rel='noreferrer'>https://github.com/triinuerik</a>
          </div>
        </div>
      </div>
    </div>
  )
}
