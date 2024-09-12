import React from 'react';
import { Content } from './Content.jsx';

export function LandingTemplate() {
  return (
    <>
      {Array(1).fill(null).map((_, i) => (
          <Content key={i} id={i}/>
      ))}
    </>
  );
}