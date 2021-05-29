import React, { useState } from 'react';
import '../style.css';
import Button from '../Button/index';
import PopupWindow from '../PopupWindow/index';
import NumberOfPlayers from '../NumberOfPlayers';
import Rules from '../Rules/index';

const HomePage = () => {
  const [popup, setPopup] = useState('popup-window hidden');
  const [popupContent, setPopupContent] = useState();

  const handlePopupOpen = (content) => {
    console.log(content);
    setPopup('popup-window');
    setPopupContent(content);
  };

  return (
    <>
      <img
        src="../img/slovickomat_obdelnik.svg"
        alt="homepage-logo"
        className="homepage-logo"
      />
      <h1 className="block-text">Procvičte si anglická slovíčka v naší hře</h1>
      <PopupWindow nameOfClass={popup}>{popupContent}</PopupWindow>
      <div className="homepage-buttons">
        <Button
          onClick={() => handlePopupOpen(<Rules />)}
          nameOfClass="button button--secondary"
          textContent="Jak na to?"
        />
        <Button
          onClick={() => handlePopupOpen(<NumberOfPlayers />)}
          nameOfClass="button button--primary"
          textContent="Hrát"
        />
      </div>
    </>
  );
};

export default HomePage;
