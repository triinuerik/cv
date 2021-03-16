import React from 'react';
import { Link } from 'react-router-dom';
import AboutMeImage from '../__assets__/about-me-image.jpg';
import { Contact } from '../Contact/Contact';
import './About.scss';


export const About: React.FC = () => {
  return (
    <div className='about-container'>
      <div className='about'>
        <div className='about-image-container'>
          <img src={AboutMeImage} height='4032' width='3024' alt='Author, Triinu Erik' className='about-image' />
        </div>
        <div className='about-text'>
          <h2 className='about-title'>About me</h2>
          <p>
            Hello, I&apos;m Triinu.
            I&apos;m a front-end developer with 2 years of experience in building web applications.
            I made this web site to introduce myself both as a person and as a developer, so
            feel free to also <a href='https://github.com/triinuerik/cv' target='_blank' rel='noreferrer'>check out the source code</a>.

          </p>
          <p>
            I love and enjoy programming in React, a topic close to my heart is building accessible interfaces.
            I like to take pride in my work and don&apos;t mind going the extra mile to make sure my work has a positive impact.
            I strongly believe in teamwork and knowledge sharing, great things are rarely accomplished alone.
            Even though my strengths lie in web development, I also feel comfortable with Python and Java.
          </p>
          <p>
            In my free time I enjoy running, playing ukulele and video games and teaching tricks to my 3 rats Oswald,
            Wilbur and Mortimer.
          </p>
          <div className='cv-button-container'>
            <Link to="/cv" className='cv-button'>Check out my CV</Link>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}
