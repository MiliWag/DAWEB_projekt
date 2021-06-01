import React from 'react';
import './style.css';
import Player from '../Player/index';

const ScoreOverview = ({ testPlayerData, onPlayerScore }) => {
  return (
    <>
      <div className="score-overview">
        <div className="score-overview__players">
          {testPlayerData.map((player) => (
            <Player
              key={player.id}
              point=""
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
