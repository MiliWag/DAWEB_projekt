import React, { useEffect, useState, Fragment } from 'react';
import './style.css';
import Button from '../Button/index';

const TranslateCard = ({
  randomWordObject,
  onShowPopup,
  onShowTranslateCard,
}) => {
  const [message, setMessage] = useState('');
  const [isQuestionEvaluated, setIsQuestionEvaluated] = useState(false);

  const isTranslationCorrect = () => {
    const translation = document.querySelector('#translation').value;
    return randomWordObject.en === translation;
  };
  const addPointsToPlayer = () => {
    const playerNumber = 1;
    return randomWordObject.level;
  };
  const evaluateQuestion = () => {
    console.log(isTranslationCorrect());
    console.log(addPointsToPlayer());
    if (isTranslationCorrect()) {
      setMessage('✅ Správně');
      console.log(isQuestionEvaluated);
    } else {
      setMessage('❌ Špatně');
      console.log(isQuestionEvaluated);
    }
    setIsQuestionEvaluated(true);
  };

  const goBack = () => {
    onShowPopup();
    onShowTranslateCard();
  };
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
            <Button
              onClick={evaluateQuestion}
              nameOfClass="button button--primary medium"
              link="#"
              textContent="Zkontroluj"
            />
          </>
        )}
        {isQuestionEvaluated && (
          <>
            {message}
            <br />
            {randomWordObject.en}
            {randomWordObject.en_2 && ', ' + randomWordObject.en_2}
            {randomWordObject.en_3 && ', ' + randomWordObject.en_3}
            {randomWordObject.en_4 && ', ' + randomWordObject.en_4}
            {randomWordObject.en_5 && ', ' + randomWordObject.en_5}
            <Button
              onClick={goBack}
              nameOfClass="button button--primary medium"
              link="#"
              textContent="Zpět"
            />
          </>
        )}
      </div>
    </>
  );
};

export default TranslateCard;
