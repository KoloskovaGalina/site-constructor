import React, {useState} from 'react';
import { AddElements } from './AddElements.jsx';

export function Content({id}) {
  const [isEmpty, setIsEmpty] = useState(true);
  const className = `content ${isEmpty ? 'content--empty' : ''} ${id}`;

  const checkElement = (item) => {
    setIsEmpty(item);
  }

  return (
    <div className={className}>
      <AddElements container={'content'} placeholder={'Content'} onCheckEmpty={checkElement}/>
    </div>
  );
}