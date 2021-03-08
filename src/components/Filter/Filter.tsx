import React, { useState, useRef, useEffect } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Filter.scss';

interface FilterProps {
  options: string[];
  onFiltersChange: (filters: string[]) => void;
}


export const Filter: React.FC<FilterProps> = ({options, onFiltersChange}) => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    onFiltersChange(tags);
  }, [tags, onFiltersChange])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        if (activeSuggestion > -1) {
          addTag(suggestions[activeSuggestion]);
        } else if (!!newTag && !tags.find((tag: string) => tag === newTag)) {
          addTag(newTag);
        }
        break;
      case 'Backspace':
        if (newTag.length === 0) {
          removeTag(tags[tags.length - 1]);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = activeSuggestion + 1;
        if (nextIndex < suggestions.length) {
          setActiveSuggestion(nextIndex);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = activeSuggestion - 1;
        if (prevIndex >= -1) {
          setActiveSuggestion(prevIndex);
        }
        break;
      default:
        break;
    }
  }

  const addTag = (tag: string) => {
    inputRef.current.value = '';
    setTags([...tags, tag]);
    setNewTag('');
    setSuggestions([]);
    setActiveSuggestion(-1);
  }

  const removeTag = (removedTag: string) => setTags(tags.filter((tag: string) => tag !== removedTag))

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setNewTag(value);
    setSuggestions(getFilteredOptions(value))
  }

  const getFilteredOptions = (stringToMatch: string) => 
    options.filter((option: string) => option.toLowerCase().includes(stringToMatch.toLowerCase()))

  return(
    <>
      <div className='filter'>
          { tags.map((tag) => 
            <span className='tag' key={tag}>
              {tag}
              <span role='button' className='tag-remove-button' onClick={() => removeTag(tag)}><IoIosCloseCircleOutline /></span>
            </span> )}
          <input
            ref={inputRef}
            type='text' 
            placeholder={!tags.length ? 'Enter tags to filter by...' : ''}
            onKeyDown={handleKeyDown} 
            onChange={handleChange} 
          />
      </div>
      <ul className='suggestions'>
        { suggestions.map((matchedOption: string, index) => 
          <li key={matchedOption}
            className={`suggestion-item ${index === activeSuggestion && 'active' }`} 
            tabIndex={0} 
            onClick={() => addTag(matchedOption)}
          >
            { matchedOption }
          </li>
        )}
      </ul>
    </>
  )
}
