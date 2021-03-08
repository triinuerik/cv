import React from 'react';
import Icon from '../Icon/Icon';
import { Stack } from '../Stack/Stack';
import './TimeLineNode.scss'


export const TimeLineNode: React.FC<LifeEvent> = ({ id, title, date, section, desc, link, stack }) => {
  return (
    <div className='node'>
      <Icon section={section} />
      <div className='node-content'>
        <h1 className='title'>{title}</h1>
        <h2 className='date'>{date}</h2>
        <p>{desc}</p>
        { link && <a className='link' href={link}>{link}</a> }
        <Stack stack={stack}/>
      </div>
    </div>
  )
}
