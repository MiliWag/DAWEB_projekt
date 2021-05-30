import React from 'react';
import './style.css';
import Player from '../Player/index';

const ScoreOverview = ({ header, testPlayerData }) => {
  return (
    <>
      <div className="score-overview">
        <h2>{header}</h2>
        <div className="score-overview__players">
          {testPlayerData.map((player) => (
            <Player
              key={player.id}
              point="20"
              name={player.name}
              color={`player__color ` + player.color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScoreOverview;
