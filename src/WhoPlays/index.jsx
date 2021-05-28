import React from 'react';
import './style.css';

const WhoPlays = ({ color }) => {
  return (
    <div class="who-plays">
      <p class="who-plays__text">Hraje:</p>
      <div class={color}></div>
    </div>
  );
};

export default WhoPlays;
