import React, { useState } from 'react';
import './style.css';
import Button from '../Button/index';
import NumberOfPlayers from '../NumberOfPlayers';

const PlayerCard = ({ onNextStep, onPreviousStep, playerNumber }) => {
  return (
    <>
      <div className="player-card">
        <span className="player-number">Hráč č. {playerNumber}</span>

        <label htmlFor="input_for_name">
          Jméno:
          <input
            className="input-for-name"
            id="input_for_name"
            type="text"
            name="name"
          />
        </label>
        <span className="choose-color">Zvolte barvu hráče:</span>
        <div className="player-color">
          <label htmlFor="player_color_three">
            <input
              className="player-color-yellow"
              id="player_color_three"
              type="radio"
              name="player_color"
              value="yellow"
            />
          </label>
          <label htmlFor="player_color_one">
            <input
              className="player-color-red"
              id="player_color_one"
              type="radio"
              name="player_color"
              value="red"
            />
          </label>
          <label htmlFor="player_color_two">
            <input
              className="player-color-blue"
              id="player_color_two"
              type="radio"
              name="player_color"
              value="blue"
            />
          </label>
          <label htmlFor="player_color_four">
            <input
              className="player-color-green"
              id="player_color_four"
              type="radio"
              name="player_color"
              value="green"
            />
          </label>
        </div>

        <div className="player-card-buttons">
          <Button
            onClick={onPreviousStep}
            nameOfClass="button button--secondary smaller"
            textContent="Zpět"
          />
          <Button
            onClick={onNextStep}
            nameOfClass="button button--primary small"
            textContent="Další"
          />
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
