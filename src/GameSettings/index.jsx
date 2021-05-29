import React, { useState } from 'react';
import NumberOfPlayers from '../NumberOfPlayers/index';
import PlayerCard from '../PlayerCard/index';

const GameSettings = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(true);
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const isGameSet = () => {
    step === numberTest ? true : false;
  };

  const numberTest = 3;

  return (
    <>
      {step === 0 && <NumberOfPlayers onNextStep={handleNextStep} />}
      {step >= 1 && step <= numberTest && (
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
