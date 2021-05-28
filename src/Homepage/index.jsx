import React from 'react';
import '../style.css';
import Button from '../Button/index';

const HomePage = () => {
  return (
    <>
      <img
        src="../img/slovickomat_obdelnik.svg"
        alt="homepage-logo"
        className="homepage-logo"
      />
      <h1 className="block-text">Procvičte si anglická slovíčka v naší hře</h1>

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
    </>
  );
};

export default HomePage;
