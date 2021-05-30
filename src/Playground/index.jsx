import React from 'react';
import './style.css';
import PlayField from '../PlayField/index';

const Playground = () => {
  return (
    <>
      <div className="block__start">Start</div>
      <PlayField />
      <div className="block__end">Cíl</div>
    </>
  );
};

export default Playground;
