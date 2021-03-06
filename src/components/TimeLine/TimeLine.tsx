import React, { useState } from 'react';
import { TimeLineNode } from '../TimeLineNode/TimeLineNode';
import { Filter } from '../Filter/Filter';
import './TimeLine.scss'


interface Props {
  lifeEvents: LifeEvent[];
}

export const TimeLine: React.FC<Props> = ({ lifeEvents }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const options = lifeEvents
    .flatMap(lifeEvent => lifeEvent.stack)
    .filter(stack => !!stack);

  return(
    <div className='timeline'>
      <Filter options={[...new Set(options)]} onFiltersChange={(filters: string[]) => setSelectedFilters(filters)} />
      <div className='line'></div>
      { lifeEvents
        .filter((lifeEvent: LifeEvent) => selectedFilters.length 
          ? lifeEvent.stack?.some((tag: string) => selectedFilters.includes(tag)) 
          : lifeEvent)
        .map(({id, title, date, section, desc, stack} : LifeEvent) =>
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