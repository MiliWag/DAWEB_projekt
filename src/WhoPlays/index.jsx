import React from 'react';
import './style.css';

const WhoPlays = ({ currentPlayer }) => {
  return (
    <div className="who-plays">
      <p className="who-plays__text">Hraje: {currentPlayer.name}</p>
      <div className={`who-plays__color ` + currentPlayer.color}></div>

      <img
        className="img-score-board"
        src="../img/robot_na_skore.svg"
        alt="robot_na_skore"
      />
    </div>
  );
};

export default WhoPlays;
