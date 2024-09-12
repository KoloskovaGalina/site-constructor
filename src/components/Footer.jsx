import React, {useState} from 'react';
import { AddElements } from './AddElements.jsx';

export function Footer() {
  const [isEmpty, setIsEmpty] = useState(true);
  const className = `footer ${isEmpty ? 'footer--empty' : ''}`;

  const checkElement = (item) => {
    setIsEmpty(item);
  }

  return (
    <footer className={className}>
      <AddElements container={'footer'} placeholder={'Footer'} onCheckEmpty={checkElement}/>
    </footer>
  );
}