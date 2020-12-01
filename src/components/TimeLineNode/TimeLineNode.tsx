import React from 'react';
import { LifeEvent } from '../../interfaces'; 
import Icon from '../Icon/Icon';
import './TimeLineNode.css'


export const TimeLineNode: React.FC<LifeEvent> = props => {
  const { id, title, date, section, desc, stack } = props;
  return (
    <div className='node'>
      <Icon section={section} />
      <div className='node-content'>
        <h1>{title}</h1>
        <h2 className='date'>{date}</h2>
        <div className=''>{desc}</div>
        <div className=''>{stack}</div>
      </div>
    </div>
  )
}