import React from 'react';
import './style.css';
import ScoreOverview from '../ScoreOverview/index';
import Button from '../Button/index';

const GameOver = ({ winner, gamePlayerData }) => {
  const pageReload = () => {
    location.reload();
  };

  return (
    <>
      <div className="game-over">
        <h2>Konec hry</h2>
        <img
          src="../img/robot_vyhra.svg"
          alt="celebration"
          className="winner-img"
        />
        <p className="winner">Vítěz je {winner}!</p>

        <ScoreOverview gamePlayerData={gamePlayerData} />
        <div className="game-over-buttons">
          <Button
            onClick={pageReload}
            nameOfClass="button button--primary light"
            textContent="Domů"
          />
        </div>
      </div>
    </>
  );
};

export default GameOver;
