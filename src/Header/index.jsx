import React from 'react';
import './style.css';
import Player from '../Player/index';
import WhoPlays from '../WhoPlays/index';
import Button from '../Button/index';
import ScoreOverview from '../ScoreOverview';

const Header = () => {
  return (
    <>
      <header className="header">
        <a class="logo" href="index.html">
          <img
            src="../img/slovickomat_obdelnik.svg"
            alt="game-logo"
            class="game-logo"
          />
        </a>
        <div class="score-board">
          <WhoPlays color="who-play__color" />
          <ScoreOverview />
        </div>

        <div class="play-area">
          <Button nameOfClass="difficulty-choice" textContent="Hraj!" />
          <Button nameOfClass="info-rules" textContent="Pravidla" />
        </div>
      </header>
    </>
  );
};

export default Header;
