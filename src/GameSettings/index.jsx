import React, { useState } from 'react';
import NumberOfPlayers from '../NumberOfPlayers/index';
import PlayerCard from '../PlayerCard/index';

const GameSettings = ({ onShowPopup, onIsGameSet, onGamePlayerData }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState();
  const [step, setStep] = useState(0);
  const [playerData, setPlayerData] = useState([]);
  const colorsArray = [];

  onGamePlayerData(playerData);
  const handlePlayerData = (object) => {
    playerData.push(object);
    setPlayerData(playerData);
  };

  const handleNumberOfPlayers = (value) => {
    setNumberOfPlayers(value);
  };

  const handleNextStep = () => {
    if (isGameSet) {
      onShowPopup();
      onIsGameSet();
    } else {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const isGameSet = step === numberOfPlayers ? true : false;

  return (
    <>
      {step === 0 && (
        <NumberOfPlayers
          onNextStep={handleNextStep}
          onNumberOfPlayers={handleNumberOfPlayers}
        />
      )}
      {step >= 1 && step <= numberOfPlayers && (
        <PlayerCard
          onPlayerData={handlePlayerData}
          playerNumber={step}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
          playerDataObject={playerData}
        />
      )}
    </>
  );
};

export default GameSettings;
