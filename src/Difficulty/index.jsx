import React from 'react';
import './style.css';
import Button from '../Button/index';

const Difficulty = () => {
  return (
    <>
      <div className="difficulty">
        <h3>Zvol si obtížnost</h3>
        <span>(1 = nejlehčí, 3 = nejtěžší)</span>
        <div className="difficulty-input">
          <label className="difficulty-label" for="difficulty_one">
            <input
              className="difficulty-input__item"
              id="difficulty_one"
              type="radio"
              name="difficulty"
              value="1"
            />
            obtížnost 1
          </label>
          <label className="difficulty-label" for="difficulty_two">
            <input
              className="difficulty-input__item"
              id="difficulty_two"
              type="radio"
              name="difficulty"
              value="2"
            />
            obtížnost 2
          </label>
          <label className="difficulty-label" for="ifficulty_three">
            <input
              className="difficulty-input__item"
              id="difficulty_three"
              type="radio"
              name="difficulty"
              value="3"
            />
            obtížnost 3
          </label>
        </div>

        <Button
          nameOfClass="button button--primary medium"
          link="#"
          textContent="Hraj"
        />
      </div>
    </>
  );
};

export default Difficulty;
