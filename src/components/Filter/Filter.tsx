import React, { useState, useRef, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Filter.scss';


const SECTION_TAGS = ['Work', 'Education', 'Personal'];

interface FilterProps {
  options: string[];
  onFiltersChange: (filters: string[]) => void;
}

export const Filter: React.FC<FilterProps> = ({options, onFiltersChange}) => {
  const [tags, setTags] = useState(['Work', 'JavaScript']);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    onFiltersChange(tags);
  }, [tags])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const newTag = (event.target as HTMLInputElement).value;
    switch (event.key) {
      case 'Enter':
        if (activeSuggestion > -1) {
          addTag(suggestions[activeSuggestion]);
        } else {
          addTag(newTag);
        }
        break;
      case 'Backspace':
        if (newTag.length === 0) {
          removeTag(tags[tags.length - 1]);
        }
        break;
      case 'Escape':
        setSuggestions([]);
        setActiveSuggestion(-1);
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
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setSuggestions(getFilteredOptions(value))
  }

  const addTag = (newTag: string) => {
    if (!!newTag && !tags.find((tag: string) => tag === newTag)) {
      inputRef.current.value = '';
      setTags([...tags, newTag]);
      setSuggestions([]);
      setActiveSuggestion(-1);
    } else {
      blinkError();
    }
  }

  const removeTag = (removedTag: string) => setTags(tags.filter((tag: string) => tag !== removedTag))

  const getFilteredOptions = (stringToMatch: string) => 
    options.filter((option: string) => option.toLowerCase().includes(stringToMatch.toLowerCase()))

  const blinkError = () => {
    inputRef.current.classList.remove('error-blink');
    void inputRef.current.offsetWidth;
    inputRef.current.classList.add('error-blink');
  }

  return(
    <OutsideClickHandler onOutsideClick={() => {
      setSuggestions([]);
      setActiveSuggestion(-1);
    }}>
      <div className='filter'>
        { tags.map((tag: string) => 
          <span className={`tag ${SECTION_TAGS.includes(tag) && tag}`} key={tag}>
            { tag }
            <span role='button' className='tag-remove-button' onClick={() => removeTag(tag)}>
              <IoIosCloseCircleOutline />
            </span>
          </span> )}
        <input
          ref={inputRef}
          type='text'
          aria-label='Input tags to filter timeline'
          placeholder={!tags.length ? 'Enter tags to filter by...' : ''}
          onKeyDown={handleKeyDown} 
          onChange={handleChange}
          onFocus={handleChange}
        />
      </div>
      <ul className='suggestions'>
        { suggestions.map((matchedOption: string, index: number) => 
          <li 
            key={matchedOption}
            className={`suggestion-item ${index === activeSuggestion && 'active'}`} 
            onClick={() => addTag(matchedOption)}
          >
            { matchedOption }
          </li>
        )}
      </ul>
    </OutsideClickHandler>
  )
}
