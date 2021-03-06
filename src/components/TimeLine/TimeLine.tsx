import React from 'react';
import { TimeLineNode } from '../TimeLineNode/TimeLineNode';
import { Filter } from '../Filter/Filter';
import './TimeLine.scss'


interface Props {
  lifeEvents: LifeEvent[];
}

export const TimeLine: React.FC<Props> = ({ lifeEvents }) => {

  const options = lifeEvents
    .flatMap(lifeEvent => lifeEvent.stack)
    .filter(stack => !!stack);

  return(
    <div className='timeline'>
      <Filter options={[...new Set(options)]} />
      <div className='line'></div>
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
    </div>
  )
}