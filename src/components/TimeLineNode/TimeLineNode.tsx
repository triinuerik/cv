import React from 'react';
import Icon from '../Icon/Icon';
import { Stack } from '../Stack/Stack';
import './TimeLineNode.scss'


interface TimeLineNodeProps {
  lifeEvent: LifeEvent;
}

export const TimeLineNode: React.FC<TimeLineNodeProps> = ({ lifeEvent }) => {
  const { id, title, date, section, desc, link, stack } = lifeEvent;
  return (
    <div className='node'>
      <Icon section={section} />
      <div className='node-content'>
        <h1 className='node-title'>{title}</h1>
        <h2 className='node-date'>{date}</h2>
        <p className='node-description'>{desc}</p>
        { link && <a className='node-link' href={link} rel='noreferrer'>{link}</a> }
        <Stack stack={stack}/>
      </div>
    </div>
  )
}
