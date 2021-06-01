import React from 'react';
import './style.css';

const Player = ({ nameOfClass, color, classForScore, score, name }) => {
  return (
    <>
      <div className={`player ` + nameOfClass}>
        <div className={color}></div>
        <div className="player__score">
          {score} <span className="player__points">bodů</span>
        </div>
        <div className="player__name">{name}</div>
      </div>
    </>
  );
};

export default Player;
