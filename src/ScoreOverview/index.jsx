import React from 'react';
import './style.css';
import Player from '../Player/index';

const ScoreOverview = ({ header }) => {
  return (
    <>
      <div className="score-overview">
        <h2>{header}</h2>
        <div className="score-overview-players">
          <Player
            point="20"
            name="Mili"
            color="player__color player__color--four"
          />
          <Player
            point="20"
            name="Mili"
            color="player__color player__color--four"
          />
          <Player
            point="20"
            name="Mili"
            color="player__color player__color--four"
          />
          <Player
            point="20"
            name="Mili"
            color="player__color player__color--four"
          />
        </div>
      </div>
    </>
  );
};

export default ScoreOverview;
