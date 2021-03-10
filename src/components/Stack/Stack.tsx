import React from 'react';
import './Stack.scss'

interface StackProps {
  stack: string[];
}

export const Stack: React.FC<StackProps> = ({ stack }) => {
  return(
    <div className='stack-container'>
      { stack && stack.map(tag =>
        <span key={tag} className='tag'>{tag}</span>
      )}
    </div>
  )
}
