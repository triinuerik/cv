import React, { useState } from 'react';
import { TimeLineNode } from '../TimeLineNode/TimeLineNode';
import { Filter } from '../Filter/Filter';
import './TimeLine.scss'


interface Props {
  lifeEvents: LifeEvent[];
}

export const TimeLine: React.FC<Props> = ({ lifeEvents }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const getUniqueOptions = () => {
    const allOptions = lifeEvents.flatMap(lifeEvent => {
      if (lifeEvent.stack) {
        return [...lifeEvent.stack, lifeEvent.section]
      }
      return [lifeEvent.section]
    })
    return [...new Set(allOptions)]
  }

  const getFiltredNodes = () => 
    lifeEvents.filter((lifeEvent: LifeEvent) => selectedFilters.length 
      ? selectedFilters.some((tag: string) => lifeEvent.stack?.includes(tag) || lifeEvent.section === tag) 
      : true)

  return(
    <div className='timeline'>
      <Filter options={getUniqueOptions()} onFiltersChange={(filters: string[]) => setSelectedFilters(filters)} />
      <div className='timeline-nodes' tabIndex={0}>
        { getFiltredNodes().map((lifeEvent : LifeEvent) => 
          <TimeLineNode lifeEvent={lifeEvent} key={lifeEvent.id}/>
        )}
      </div>
    </div>
  )
}