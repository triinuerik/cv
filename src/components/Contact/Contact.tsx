import React from 'react';
import { IoIosMail, IoIosCall } from "react-icons/io";
import './Contact.scss';

export const Contact: React.FC = () => {
  return(
    <div className='contact'>
        <div className='contact-row'>
            <div className='contact-icon'><IoIosCall /></div>
            <div>+372 59 022 850</div>
        </div>
        <div className='contact-row'>
            <div className='contact-icon'><IoIosMail /></div>
            <div>triinuerik96@gmail.com</div>
        </div>
    </div>
  )
}
