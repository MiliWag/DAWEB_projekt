import React from 'react';
import './style.css';
import Button from '../Button/index';

const TranslateCard = ({ word, translation }) => {
  return (
    <>
      <div className="translate-card">
        <span className="translate-card__word">{word}</span>
        <span className="translate-card__text">Napiš překlad:</span>
        <input
          className="translate-card__translation"
          type="text"
          id="translation"
          name="translation"
        />
        {translation}
        <Button
          nameOfClass="button button--primary medium"
          link="#"
          textContent="Zkontroluj"
        />
      </div>
    </>
  );
};

export default TranslateCard;
