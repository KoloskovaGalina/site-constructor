import React, {useState} from 'react';
import { AddElements } from './AddElements.jsx';

export function Header() {
  const [isEmpty, setIsEmpty] = useState(true);
  const className = `header ${isEmpty ? 'header--empty' : ''}`;

  const checkElement = (item) => {
    setIsEmpty(item);
  }

  return (
    <header className={className}>
      <AddElements container={'header'} placeholder={'Header'} onCheckEmpty={checkElement}/>
      </header>
  );
}