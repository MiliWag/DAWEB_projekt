import React, { useState } from 'react';
import './style.css';
import Player from '../Player/index';
import WhoPlays from '../WhoPlays/index';
import Button from '../Button/index';
import ScoreOverview from '../ScoreOverview';
import PopupWindow from '../PopupWindow/index';
import Rules from '../Rules/index';
import TranslateCard from '../TranslateCard';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showWord, setShowWord] = useState(false);

  const handleShowPopup = () => setShowPopup(!showPopup);

  const handleShowRules = () => {
    setShowRules(!showRules);
    setShowPopup(!showPopup);
  };

  const handleShowWord = () => {
    setShowWord(!showWord);
    setShowPopup(!showPopup);
  };

  const popupWindowClass = showPopup ? 'popup-window' : 'popup-window hidden';

  return (
    <>
      <header className="header">
        <a className="logo" href="index.html">
          <img
            src="../img/slovickomat_obdelnik.svg"
            alt="game-logo"
            className="game-logo"
          />
        </a>
        <div className="score-board">
          <WhoPlays color="who-play__color" />
          <ScoreOverview />
        </div>

        <PopupWindow nameOfClass={popupWindowClass}>
          {showRules && <Rules onShowPopup={handleShowPopup} />}
          {showWord && <TranslateCard onShowWord={handleShowWord} />}
        </PopupWindow>

        <div className="play-area">
          <Button
            onClick={handleShowWord}
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
