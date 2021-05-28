import React from 'react';
import './style.css';
import Button from '../Button/index';

const RightAnswer = ({ point }) => {
  return (
    <>
      <div className="right-answer">
        <img
          src="./img/good.svg"
          alt="yes_icon"
          className="right-answer__image"
        />
        <span className="right-answer__text">Správně!</span>
        <p className="right-answer__score">Připisuješ si {point} bod/y</p>
        <Button
          nameOfClass="button button--primary light"
          link="#"
          textContent="Zpět do hry"
        />
      </div>
    </>
  );
};

export default RightAnswer;
