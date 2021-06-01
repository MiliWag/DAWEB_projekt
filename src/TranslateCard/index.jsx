import React, { useEffect, useState, Fragment } from 'react';
import './style.css';
import Button from '../Button/index';

const TranslateCard = ({
  randomWordObject,
  onShowPopup,
  onShowTranslateCard,
  onPlayerScore,
}) => {
  const [message, setMessage] = useState('');
  const [isQuestionEvaluated, setIsQuestionEvaluated] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [points, setPoints] = useState('');

  const isTranslationCorrect = () => {
    const translation = document.querySelector('#translation').value;
    if (
      translation === randomWordObject.en ||
      translation === randomWordObject.en_2 ||
      translation === randomWordObject.en_3 ||
      translation === randomWordObject.en_4 ||
      translation === randomWordObject.en_5
    ) {
      return true;
    } else {
      return false;
    }
  };

  const evaluateQuestion = () => {
    console.log(isTranslationCorrect());
    if (isTranslationCorrect()) {
      setMessage('Správně');
      setImgUrl('./img/robot_spravne.svg');
      setPoints('Přičítáš si ' + Number(randomWordObject.level) + ' bod/y');

      onPlayerScore(Number(randomWordObject.level));
    } else {
      setMessage('Špatně');
      setImgUrl('../img/robot_spatne.svg');
      setPoints('Přičítáš si 0 bodů');
    }
    setIsQuestionEvaluated(true);
  };

  const goBack = () => {
    onShowPopup();
    onShowTranslateCard();
  };

  const rightAnswerText = 'Správná odpověď: ';

  return (
    <>
      <div className="translate-card">
        {!isQuestionEvaluated && (
          <>
            <span className="translate-card__word">{randomWordObject.cz}</span>
            <span className="translate-card__text">Napiš překlad:</span>
            <input
              className="translate-card__translation"
              type="text"
              id="translation"
              name="translation"
            />
            {/*{randomWordObject.en}*/}
            <button
              className="button button--primary medium"
              onClick={evaluateQuestion}
            >
              {' '}
              Zkontroluj
            </button>
          </>
        )}

        {isQuestionEvaluated && (
          <>
            <img className="answer-img" src={imgUrl} alt="answer-img" />
            <span className="answer-text">{message}</span>
            <p className="answer-score">{points}</p>
            <p>
              {rightAnswerText}
              {randomWordObject.en}
              {randomWordObject.en_2 && ', ' + randomWordObject.en_2}
              {randomWordObject.en_3 && ', ' + randomWordObject.en_3}
              {randomWordObject.en_4 && ', ' + randomWordObject.en_4}
              {randomWordObject.en_5 && ', ' + randomWordObject.en_5}
            </p>
            <Button
              onClick={goBack}
              nameOfClass="button button--primary medium"
              link="#"
              textContent="Hraj dál"
            />
          </>
        )}
      </div>
    </>
  );
};

export default TranslateCard;
