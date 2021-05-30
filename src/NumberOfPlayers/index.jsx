import React, { useState, useEffect } from 'react';
import './style.css';
import Button from '../Button/index';
import PlayerCard from '../PlayerCard/index';

const NumberOfPlayers = ({ onNextStep, onNumberOfPlayers }) => {
  const handleChange = (e) => {
    onNumberOfPlayers(Number(e.target.value));
  };
  return (
    <>
      <label className="number-of-players" htmlFor="players-number">
        Zvolte počet hráčů:
      </label>
      <select
        onChange={handleChange}
        id="players-number"
        className="number-of-players-select"
        name="number-of-players"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <Button
        onClick={onNextStep}
        nameOfClass="button button--primary small"
        textContent="Další"
      />
    </>
  );
};

export default NumberOfPlayers;
