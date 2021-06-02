import React, { useState } from 'react';
import './style.css';
import Player from '../Player/index';

import Button from '../Button/index';
import ScoreOverview from '../ScoreOverview';
import PopupWindow from '../PopupWindow/index';
import Rules from '../Rules/index';
import TranslateCard from '../TranslateCard';
import GameOver from '../GameOver';

const Header = ({
  gamePlayerData,
  onRandomWord,
  randomWordObject,
  onPlayerScore,
  currentPlayer,
  onCurrentPlayer,
  onUpdatePlayerScore,
  finalPlayerScore,
  onShowGameOver,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showTranslateCard, setShowTranslateCard] = useState(false);
  const [showWordLevel, setShowWordLevel] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);

  const handleShowGameOver = () => {
    setShowGameOver(!setShowGameOver);
    setShowPopup(!showPopup);
  };
  const handleShowPopup = () => setShowPopup(!showPopup);

  const handleShowRules = () => {
    setShowRules(!showRules);
    setShowPopup(!showPopup);
  };

  const handleShowTranslateCard = (wordLevel) => {
    setShowTranslateCard(!showTranslateCard);
    setShowRules(false);
    setShowWordLevel(false);
    onRandomWord(wordLevel);
    setShowPopup(!showPopup);
  };
  const handleShowWordLevel = () => {
    setShowPopup(!showPopup);
    setShowWordLevel(!showWordLevel);
  };

  console.log(showWordLevel);

  const isGameOver = (number) => {
    if (number >= 60) {
      setShowPopup(!showPopup);
      return true;
    }
    return false;
  };

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
          {showRules && <Rules onShowPopup={handleShowPopup} />}

          {showTranslateCard && (
            <TranslateCard
              onShowPopup={handleShowPopup}
              onShowTranslateCard={handleShowTranslateCard}
              randomWordObject={randomWordObject}
              onPlayerScore={onPlayerScore}
              currentPlayer={currentPlayer}
              onCurrentPlayer={onCurrentPlayer}
              onUpdatePlayerScore={onUpdatePlayerScore}
            />
          )}
          {showGameOver && <GameOver gamePlayerData={gamePlayerData} />}
        </PopupWindow>

        <Button
          onClick={handleShowRules}
          nameOfClass="info-rules"
          textContent="Pravidla"
        />
      </header>
      <>
        <div className="choose-word-difficulty">
          <h2 className="header-word-difficulty">
            Vyber si obtížnost slovíčka:
          </h2>
          <div className="choose-word-difficulty-buttons">
            <button
              className="btn-word-difficulty"
              onClick={() => handleShowTranslateCard('1')}
            >
              Úroveň 1
            </button>
            <button
              className="btn-word-difficulty"
              onClick={() => handleShowTranslateCard('2')}
            >
              Úroveň 2
            </button>
            <button
              className="btn-word-difficulty last"
              onClick={() => handleShowTranslateCard('3')}
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
