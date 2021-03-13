import React from 'react';
import { IoIosMail, IoIosCall, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import './Contact.scss';


export const Contact: React.FC = () => {
  return (
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
        <a href='https://www.linkedin.com/in/triinu-erik/' target='_blank' rel='noreferrer'>linkedin.com/in/triinu-erik/</a>
      </div>
      <div className='contact-row'>
        <div className='contact-icon'><IoLogoGithub /></div>
        <a href='https://github.com/triinuerik' target='_blank' rel='noreferrer'>github.com/triinuerik</a>
      </div>
    </div>
  )
}
