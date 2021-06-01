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

  const isTranslationCorrect = () => {
    const translation = document.querySelector('#translation').value;
    return randomWordObject.en === translation;
  };

  const evaluateQuestion = () => {
    console.log(isTranslationCorrect());
    if (isTranslationCorrect()) {
      setMessage('✅ Správně');
      /*   let newPlayerScore = playerScore + 1;
      setPlayerScore(newPlayerScore);
      console.log(newPlayerScore); */
      console.log(Number(randomWordObject.level));
    } else {
      setMessage('❌ Špatně');
      console.log(isQuestionEvaluated);
    }
    setIsQuestionEvaluated(true);
  };

  const goBack = () => {
    onShowPopup();
    onShowTranslateCard();
    onPlayerScore();
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
            <button onClick={evaluateQuestion}> Zkontroluj</button>
          </>
        )}

        {isQuestionEvaluated && (
          <>
            {message}, Získáváš: {Number(randomWordObject.level)} bod/y
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
              textContent="Hraj dál"
            />
            <button onClick={() => setPlayerScore(playerScore + 1)}>
              Přičti skóre
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default TranslateCard;
