import React, { useState } from 'react';
import '../style.css';
import Button from '../Button/index';
import PopupWindow from '../PopupWindow/index';
import Rules from '../Rules/index';
import GameSettings from '../GameSettings';

const HomePage = ({ onIsGameSet, onGamePlayerData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showGameSettings, setShowGameSettings] = useState(false);

  const handleShowPopup = () => setShowPopup(!showPopup);

  const handleShowRules = () => {
    setShowRules(!showRules);
    setShowPopup(!showPopup);
  };

  const handleShowGameSettings = () => {
    setShowGameSettings(true);
    setShowPopup(!showPopup);
    setShowRules(false);
  };

  const popupWindowClass = showPopup ? 'popup-window' : 'popup-window hidden';

  return (
    <>
      <img
        src="../img/slovickomat_logo_robot.svg"
        alt="homepage-logo"
        className="homepage-logo"
      />
      <h1 className="block-text">Procvičte si anglická slovíčka v naší hře</h1>
      <PopupWindow nameOfClass={popupWindowClass}>
        {showRules && <Rules onShowPopup={handleShowPopup} />}
        {showGameSettings && (
          <GameSettings
            onShowPopup={handleShowPopup}
            onIsGameSet={onIsGameSet}
            onGamePlayerData={onGamePlayerData}
          />
        )}
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
