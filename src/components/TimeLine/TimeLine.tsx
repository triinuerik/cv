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
      <div className='timeline-nodes' tabIndex={0}>
        { lifeEvents
          .filter((lifeEvent: LifeEvent) => selectedFilters.length 
            ? lifeEvent.stack?.some((tag: string) => selectedFilters.includes(tag)) 
            : lifeEvent)
          .map((lifeEvent : LifeEvent) => <TimeLineNode lifeEvent={lifeEvent} key={lifeEvent.id}/>
        )}
      </div>
    </div>
  )
}