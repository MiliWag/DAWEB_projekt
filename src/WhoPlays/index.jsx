import React from 'react';
import './style.css';

const WhoPlays = ({ color }) => {
  return (
    <div className="who-plays">
      <p className="who-plays__text">Hraje:</p>
      <div className={color}></div>
    </div>
  );
};

export default WhoPlays;
