import React from 'react';
import './style.css';
import Player from '../Player/index';
import WhoPlays from '../WhoPlays/index';
import Button from '../Button/index';
import ScoreOverview from '../ScoreOverview';

const Board = () => {
  return (
    <>
      <header className="board">
        <div class="score-board">
          <WhoPlays color="who-play__color" />

          <div class="players">
            <Player
              nameOfClass="player"
              color="player__color player__color--two"
              classForScore="player__score"
              point="60"
            />
          </div>
        </div>
        <a class="logo" href="index.html">
          <img
            src="../img/slovickomat_obdelnik.svg"
            alt="game-logo"
            class="game-logo"
          />
        </a>
        <div class="score-board-desktop">
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

export default Board;
