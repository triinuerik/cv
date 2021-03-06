import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Filter.scss';

interface FilterProps {
  options: string[];
}


export const Filter: React.FC<FilterProps> = ({options}) => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !tags.find((tag: string) => tag === newTag)) {
      (event.target as HTMLInputElement).value = '';
      setTags([...tags, newTag]);
      setNewTag('');
    }
  }

  const removeTag = (removedTag: string) => setTags(tags.filter((tag: string) => tag !== removedTag))

  const suggestions = options
    .filter((option: string) => newTag.length > 0 && option.toLowerCase().indexOf(newTag.toLowerCase()) !== -1)
    .map((matchedOption: string) => <li className='suggestion-item'>{matchedOption}</li>)

  console.log(suggestions)

  return(
    <>
      <div className='filter'>
          { tags.map((tag) => 
            <span className='tag' key='tag'>
              {tag}
              <span role='button' className='tag-remove-button' onClick={() => removeTag(tag)}><IoIosCloseCircleOutline /></span>
            </span> )}
          <input 
            type='text' 
            placeholder={!tags.length ? 'Enter tags to filter by...' : ''}
            onKeyDown={handleKeyDown} 
            onChange={(e) => setNewTag(e.target.value)} 
          />
      </div>
      <ul className='suggestions'>
        { suggestions }
      </ul>
    </>
  )
}
