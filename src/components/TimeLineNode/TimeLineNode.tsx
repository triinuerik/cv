import React from 'react';
import Icon from '../Icon/Icon';
import { Stack } from '../Stack/Stack';
import './TimeLineNode.scss'


export const TimeLineNode: React.FC<LifeEvent> = props => {
  const { id, title, date, section, desc, stack } = props;
  return (
    <div className='node'>
      <Icon section={section} />
      <div className='node-content'>
        <h1 className='title'>{title}</h1>
        <h2 className='date'>{date}</h2>
        <p className=''>{desc}</p>
        <Stack stack={stack}/>
      </div>
    </div>
  )
}
