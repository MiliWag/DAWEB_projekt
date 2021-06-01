import React, { useState } from 'react';
import './style.css';
import Player from '../Player/index';

import Button from '../Button/index';
import ScoreOverview from '../ScoreOverview';
import PopupWindow from '../PopupWindow/index';
import Rules from '../Rules/index';
import TranslateCard from '../TranslateCard';

const Header = ({
  gamePlayerData,
  onRandomWord,
  randomWordObject,
  onPlayerScore,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showTranslateCard, setShowTranslateCard] = useState(false);
  const [showWordLevel, setShowWordLevel] = useState(false);

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
  };
  const handleShowWordLevel = () => {
    setShowPopup(!showPopup);
    setShowWordLevel(!showWordLevel);
  };

  console.log(showWordLevel);

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
          {showWordLevel && (
            <>
              <h2>Vyberte si obtížnost slovíčka</h2>
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
                className="btn-word-difficulty"
                onClick={() => handleShowTranslateCard('3')}
              >
                Úroveň 3
              </button>
            </>
          )}
          {showTranslateCard && (
            <TranslateCard
              onShowPopup={handleShowPopup}
              onShowTranslateCard={handleShowTranslateCard}
              randomWordObject={randomWordObject}
              onPlayerScore={onPlayerScore}
            />
          )}
        </PopupWindow>

        <div className="play-area">
          <Button
            onClick={handleShowWordLevel}
            nameOfClass="difficulty-choice"
            textContent="Hraj!"
          />
          <Button
            onClick={handleShowRules}
            nameOfClass="info-rules"
            textContent="Pravidla"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
