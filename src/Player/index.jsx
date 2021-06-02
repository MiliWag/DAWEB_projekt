import React from 'react';
import './style.css';

const Player = ({ nameOfClass, color, classForScore, score, name }) => {
  return (
    <>
      <div className={`player ` + nameOfClass}>
        <div className={color}></div>
        <div className="player__score">
          {score} <span className="player__points">b.</span>
        </div>
        <div className="player__name">{name}</div>
        <progress className="player__progress" value={score} max="60">
          {score}
        </progress>
      </div>
    </>
  );
};

export default Player;
