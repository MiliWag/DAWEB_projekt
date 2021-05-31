import React from 'react';
import './style.css';
import Player from '../Player/index';

const ScoreOverview = ({ testPlayerData }) => {
  return (
    <>
      <div className="score-overview">
        <div className="score-overview__players">
          {testPlayerData.map((player) => (
            <Player
              key={player.id}
              point={player.point}
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
