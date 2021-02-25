import React, { useState } from 'react';


export const Filter: React.FC = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !tags.find((tag: string) => tag === newTag)) {
      (event.target as HTMLInputElement).value = '';
      setTags([...tags, newTag]);
      setNewTag('');
    } else if (event.key === 'Backspace' && tags.length > 0) {
      removeTag(tags[tags.length - 1])
    }
  }

  const removeTag = (removedTag: string) => setTags(tags.filter((tag: string) => tag !== removedTag))

  return(
    <div className='filter'>
        { tags.map((tag) => <span>{tag}<button onClick={() => removeTag(tag)}>x</button></span> )}
        <input type='text' onKeyDown={handleKeyDown} onChange={(e) => setNewTag(e.target.value)} />
    </div>
  )
}
