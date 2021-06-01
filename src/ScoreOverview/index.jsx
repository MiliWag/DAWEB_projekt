import React from 'react';
import './style.css';
import Player from '../Player/index';

const ScoreOverview = ({ gamePlayerData, playerScore }) => {
  return (
    <>
      <div className="score-overview">
        <div className="score-overview__players">
          {gamePlayerData.map((player) => (
            <Player
              key={player.id}
              name={player.name}
              score={playerScore}
              color={`player__color ` + player.color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScoreOverview;
