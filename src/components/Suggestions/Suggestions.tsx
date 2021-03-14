import React from 'react';
import { SECTION_TAGS } from '../Filter/Filter';
import './Suggestions.scss';

interface SuggestionsProps {
  suggestions: string[];
  activeSuggestion: number;
  onClick: (newTag: string) => void;
}

export const Suggestions: React.FC<SuggestionsProps> = ({suggestions, activeSuggestion, onClick}) => {

  const sortSuggestions = () => 
    suggestions.sort((a: string, b: string) => a.localeCompare(b))

  const mapSuggestionItems = (startingIndex = 0) => (matchedOption: string, index: number) => (
    <li 
      key={matchedOption}
      className={`suggestion-item ${index + startingIndex === activeSuggestion && 'active'}`} 
      onClick={() => onClick(matchedOption)}
    >
      { matchedOption }
    </li>
  )

  const categorySuggestions = sortSuggestions().filter((suggestion: string) => SECTION_TAGS.includes(suggestion))
  const technologySuggestions = sortSuggestions().filter((suggestion: string) => !SECTION_TAGS.includes(suggestion))

  return (
    <ul className='suggestions'>
      { categorySuggestions.length
        ? <>
            <li className='suggestion-grouping'>Categories</li>
            { categorySuggestions.map(mapSuggestionItems()) }
          </>
        : <div />
      }
      { technologySuggestions.length
        ? <>
            <li className='suggestion-grouping'>Technologies</li>
            { technologySuggestions.map(mapSuggestionItems(categorySuggestions.length)) }
          </>
        : <div />
      }
    </ul>
  )
}
