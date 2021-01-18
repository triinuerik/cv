import React from 'react';
import './Stack.css'

interface Props {
    stack: string[];
}

export const Stack: React.FC<Props> = props => {
    const { stack } = props;
    console.log(stack)

    return(
        <div className='stack-container'>
          { stack && stack.map(tag =>
            <span key={tag} className='tag'>{tag}</span>
          )}
        </div>
      )
}
