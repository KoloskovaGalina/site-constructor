import React from 'react';
import { Content } from './Content.jsx';

export function ShopTemplate() {
  return (
    <>
      {Array(3).fill(null).map((_, i) => (
          <Content key={i} id={i}/>
      ))}
    </>
  );
}