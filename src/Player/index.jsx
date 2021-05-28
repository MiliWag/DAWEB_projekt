import React from 'react';
import './style.css';

const Player = ({ nameOfClass, color, classForScore, point, name }) => {
  return (
    <>
      <div className={nameOfClass}>
        <div className={color}></div>
        <div className={classForScore}>{point} bodů</div>
        <div className="player__name">{name}</div>
      </div>
    </>
  );
};

export default Player;
