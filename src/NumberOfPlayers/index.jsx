import React from 'react';
import './style.css';
import Button from '../Button/index';

const NumberOfPlayers = () => {
  return (
    <>
      <label class="number-of-players" for="players-number">
        Zvolte počet hráčů:
      </label>
      <select
        id="players-number"
        class="number-of-players-select"
        name="number-of-players"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <Button
        nameOfClass="button button--primary small"
        link="#"
        textContent="Další"
      />
    </>
  );
};

export default NumberOfPlayers;
