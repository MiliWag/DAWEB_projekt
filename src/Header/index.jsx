import React, { useState } from 'react';
import './style.css';
import Button from '../Button/index';
import PopupWindow from '../PopupWindow/index';
import Rules from '../Rules/index';
import TranslateCard from '../TranslateCard';
import GameOver from '../GameOver';

const Header = ({
  gamePlayerData,
  randomWordObject,
  onPlayerScore,
  currentPlayer,
  onCurrentPlayer,
  onUpdatePlayerScore,
  onShowPopup,
  showPopup,
  showGameOver,
  onShowGameOver,
  showRules,
  onShowRules,
  showTranslateCard,
  onShowTranslateCard,
  winner,
}) => {
  const popupWindowClass = showPopup ? 'popup-window' : 'popup-window hidden';

  return (
    <>
      <header className="header">
        <a className="logo" href="index.html">
          <img
            src="../img/slovickomat_logo_robot.svg"
            alt="game-logo"
            className="game-logo"
          />
        </a>

        <PopupWindow nameOfClass={popupWindowClass}>
          {showRules && <Rules onShowPopup={onShowPopup} />}

          {showTranslateCard && (
            <TranslateCard
              onShowPopup={onShowPopup}
              onShowTranslateCard={onShowTranslateCard}
              randomWordObject={randomWordObject}
              onPlayerScore={onPlayerScore}
              currentPlayer={currentPlayer}
              onCurrentPlayer={onCurrentPlayer}
              onUpdatePlayerScore={onUpdatePlayerScore}
            />
          )}
          {showGameOver && (
            <GameOver
              gamePlayerData={gamePlayerData}
              currentPlayer={currentPlayer}
              winner={winner}
            />
          )}
        </PopupWindow>

        <button className="info-rules" onClick={onShowRules}>
          Pravidla
        </button>
      </header>
      <>
        <div className="choose-word-difficulty">
          <h2 className="header-word-difficulty">
            Vyber si obtížnost slovíčka:
          </h2>
          <div className="choose-word-difficulty-buttons">
            <button
              className="btn-word-difficulty"
              onClick={() => onShowTranslateCard('1')}
            >
              Úroveň 1
            </button>
            <button
              className="btn-word-difficulty"
              onClick={() => onShowTranslateCard('2')}
            >
              Úroveň 2
            </button>
            <button
              className="btn-word-difficulty last"
              onClick={() => onShowTranslateCard('5')}
            >
              Úroveň 3
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default Header;
