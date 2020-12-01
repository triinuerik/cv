import React from 'react';
import { LifeEvent } from '../interfaces'; 
import Icon from './Icon';


export const TimeLineNode:  React.FC<LifeEvent> = props => {
  const { id, title, date, section, desc, stack } = props;
  return (
    <div>
      <Icon section={section} />
      {title}
    </div>
  )
}