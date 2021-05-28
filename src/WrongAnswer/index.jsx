import React from 'react';
import '../RightAnswer/style.css';
import Button from '../Button/index';

const WrongAnswer = ({ point, rightAnswer }) => {
  return (
    <>
      <div className="wrong-answer">
        <img
          src="../img/wrong.svg"
          alt="wrong"
          className="wrong-answer__image"
        />
        <span className="wrong-answer__text">Špatně!</span>
        <p className="wrong-answer__score">Připisuješ si {point} bodů</p>
        <p className="wrong-answer__isright">
          Správná odpověď je:
          <br />
          {rightAnswer}
        </p>
        <Button
          nameOfClass="button button--primary light"
          link="#"
          textContent="Zpět do hry"
        />
        <Button
          nameOfClass="wrong-answer-button"
          link="#"
          textContent="Přesto uznat odpověď"
        />
      </div>
    </>
  );
};

export default WrongAnswer;
