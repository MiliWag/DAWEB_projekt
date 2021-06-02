import React from 'react';
import './style.css';

const WhoPlays = ({ color }) => {
  return (
    <div className="who-plays">
      <p className="who-plays__text">Hraje:</p>
      <div className={color}></div>

      <img
        className="img-score-board"
        src="../img/robot_na_skore.svg"
        alt="robot_na_skore"
      />
    </div>
  );
};

export default WhoPlays;
