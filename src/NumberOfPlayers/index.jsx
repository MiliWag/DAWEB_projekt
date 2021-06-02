import React, { useState, useEffect } from 'react';
import './style.css';
import Button from '../Button/index';
import PlayerCard from '../PlayerCard/index';

const NumberOfPlayers = ({ onNextStep, onNumberOfPlayers }) => {
  const numberOfPlayersSet = (e) => {
    e.preventDefault();
    const selectValue = Number(document.querySelector('#players-number').value);
    onNextStep();
    onNumberOfPlayers(selectValue);

    console.log(selectValue);
  };
  return (
    <>
      <form onSubmit={numberOfPlayersSet}>
        <label className="number-of-players" htmlFor="players-number">
          Zvolte počet hráčů:
        </label>

        <select
          id="players-number"
          className="number-of-players-select"
          name="number-of-players"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button type="submit" className="button button--primary small">
          Další
        </button>
      </form>
    </>
  );
};

export default NumberOfPlayers;
