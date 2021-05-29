import React, { useState } from 'react';
import '../style.css';
import Button from '../Button/index';
import PopupWindow from '../PopupWindow/index';
import NumberOfPlayers from '../NumberOfPlayers';
import Rules from '../Rules/index';
import PlayerCard from '../PlayerCard';
import GameSettings from '../GameSettings';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showGameSettings, setShowGameSettings] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleShowRules = () => {
    setShowRules(true);
    setShowPopup(true);
  };
  const handleShowGameSettings = () => {
    setShowGameSettings(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => setShowPopup(false);

  const popupWindowClass = showPopup ? 'popup-window' : 'popup-window hidden';

  return (
    <>
      <img
        src="../img/slovickomat_obdelnik.svg"
        alt="homepage-logo"
        className="homepage-logo"
      />
      <h1 className="block-text">Procvičte si anglická slovíčka v naší hře</h1>
      <PopupWindow nameOfClass={popupWindowClass}>
        {showRules && <Rules />}
        {showGameSettings && <GameSettings />}
      </PopupWindow>
      <div className="homepage-buttons">
        <Button
          onClick={handleShowRules}
          nameOfClass="button button--secondary"
          textContent="Jak na to?"
        />
        <Button
          onClick={handleShowGameSettings}
          nameOfClass="button button--primary"
          textContent="Hrát"
        />
      </div>
    </>
  );
};

export default HomePage;
