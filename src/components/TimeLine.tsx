import React from 'react';
import { LifeEvent, Section } from '../interfaces'; 
import { TimeLineNode } from './TimeLineNode';

interface Props {
  lifeEvents: LifeEvent[];
}

export const TimeLine:  React.FC<Props> = props => {
  const { lifeEvents } = props;

  return(
    <>
      { lifeEvents.map(({id, title, date, section, desc, stack} : LifeEvent) =>
        <TimeLineNode
          key={id}
          id={id}
          title={title}
          date={date}
          section={section}
          desc={desc}
          stack={stack} />
      )}
    </>
  )
}