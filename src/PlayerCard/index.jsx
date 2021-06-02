import React, { useState } from 'react';
import './style.css';
import Button from '../Button/index';
import NumberOfPlayers from '../NumberOfPlayers';
import { addPlayer } from '../State/index';

const PlayerCard = ({
  onNextStep,
  onPreviousStep,
  playerNumber,
  onPlayerData,
  colorsArray,
  playerDataObject,
}) => {
  const [nameOfPlayer, setNameOfPlayer] = useState();

  const savePlayerData = (e) => {
    e.preventDefault();
    const playerName = document.querySelector('#input_for_name').value;

    const playerColor = document.querySelector(
      'input[name=player_color]:checked',
    ).value;

    const playerData = {
      id: playerNumber,
      name: playerName,
      color: playerColor,
      score: 0,
    };

    onPlayerData(playerData);
    onNextStep();

    e.target.reset();
  };

  const includesColor = (colorClass) => {
    return playerDataObject.some((item) => item.color === colorClass);
  };

  console.log('barvy');
  console.log(includesColor);

  return (
    <>
      <div className="player-card">
        <span className="player-number">Hráč č. {playerNumber}</span>
        <form onSubmit={savePlayerData}>
          <label htmlFor="input_for_name">
            Jméno:
            <input
              required
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
                required
                disabled={includesColor('player-color-yellow')}
                className="player-color-yellow"
                id="player_color_three"
                type="radio"
                name="player_color"
                value="player-color-yellow"
              />
            </label>
            <label htmlFor="player_color_one">
              <input
                required
                disabled={includesColor('player-color-red')}
                className="player-color-red"
                id="player_color_one"
                type="radio"
                name="player_color"
                value="player-color-red"
              />
            </label>
            <label htmlFor="player_color_two">
              <input
                required
                disabled={includesColor('player-color-blue')}
                className="player-color-blue"
                id="player_color_two"
                type="radio"
                name="player_color"
                value="player-color-blue"
              />
            </label>
            <label htmlFor="player_color_four">
              <input
                required
                disabled={includesColor('player-color-green')}
                className="player-color-green"
                id="player_color_four"
                type="radio"
                name="player_color"
                value="player-color-green"
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
              nameOfClass="button button--primary small"
              textContent="Další"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PlayerCard;
