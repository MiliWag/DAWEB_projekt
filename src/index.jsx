import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Button from './Button/index';
import PopupWindow from './PopupWindow/index';
import NumberOfPlayers from './NumberOfPlayers/index';
import { ProgressPlugin } from 'webpack';

const Homepage = () => {
  return (
    <>
      <div class="block">
        <img
          src="img/slovickomat_obdelnik.svg"
          alt="homepage-logo"
          className="homepage-logo"
        />
        <h1 className="block-text">
          Procvičte si anglická slovíčka v naší hře
        </h1>

        <div className="homepage-buttons">
          <Button
            nameOfClass="button button--secondary"
            link="rules.html"
            textContent="Jak na to?"
          />
          <Button
            nameOfClass="button button--primary"
            link="game.html"
            textContent="Hrát"
          />
        </div>
      </div>
      <PopupWindow>
        <NumberOfPlayers />
      </PopupWindow>
    </>
  );
};

render(<Homepage />, document.querySelector('.homepage'));
