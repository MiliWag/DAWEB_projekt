import React, { useState } from 'react';
import NumberOfPlayers from '../NumberOfPlayers/index';
import PlayerCard from '../PlayerCard/index';

const GameSettings = ({ onShowPopup, onIsGameSet }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const [step, setStep] = useState(0);
  const numberTest = 3;
  const handleNumberOfPlayers = (value) => {
    console.log(value);
    setNumberOfPlayers(value);
  };

  const handleNextStep = () => {
    if (isGameSet()) {
      onShowPopup();
      onIsGameSet();
    } else {
      setStep(step + 1);
    }
    console.log(isGameSet());
    console.log(step);
    console.log(numberOfPlayers);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const isGameSet = () => {
    return step === numberOfPlayers ? true : false;
  };

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
          playerNumber={step}
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />
      )}
    </>
  );
};

export default GameSettings;
