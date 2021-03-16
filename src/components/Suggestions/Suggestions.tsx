import React from 'react';
import { SECTION_TAGS } from '../Filter/Filter';
import './Suggestions.scss';

interface SuggestionsProps {
  suggestions: string[];
  activeSuggestion: number;
  onClick: (newTag: string) => void;
}

export const Suggestions: React.FC<SuggestionsProps> = ({suggestions, activeSuggestion, onClick}) => {
  const categorySuggestions = suggestions.filter((suggestion: string) => SECTION_TAGS.includes(suggestion));
  const technologySuggestions = suggestions.filter((suggestion: string) => !SECTION_TAGS.includes(suggestion));

  const mapSuggestionItems = (startingIndex = 0) => (suggestion: string, index: number) => (
    <li 
      key={suggestion}
      className={`suggestion-item ${index + startingIndex === activeSuggestion && 'active'}`} 
      onClick={() => onClick(suggestion)}
    >
      { suggestion }
    </li>
  )

  return (
    <ul className='suggestions'>
      { categorySuggestions.length
        ? <>
            <li className='suggestion-grouping'>Categories</li>
            { categorySuggestions.map(mapSuggestionItems()) }
          </>
        : null
      }
      { technologySuggestions.length
        ? <>
            <li className='suggestion-grouping'>Technologies</li>
            { technologySuggestions.map(mapSuggestionItems(categorySuggestions.length)) }
          </>
        : null
      }
    </ul>
  )
}
