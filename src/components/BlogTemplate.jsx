import React from 'react';
import { Content } from './Content.jsx';

export function BlogTemplate() {
  return (
    <>
      {Array(2).fill(null).map((_, i) => (
          <Content key={i} id={i}/>
      ))}
    </>
  );
}