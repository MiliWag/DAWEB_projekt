import React from 'react';
import './style.css';
import PlayField from '../PlayField/index';

const Playground = () => {
  return (
    <>
      <div class="block__start">Start</div>
      <PlayField />
      <div class="block__end">Cíl</div>
    </>
  );
};

export default Playground;
