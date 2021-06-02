import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Block from './Block/index';
import Homepage from './Homepage/index';
import Button from './Button/index';
import PopupWindow from './PopupWindow/index';
import NumberOfPlayers from './NumberOfPlayers/index';
import PlayerCard from './PlayerCard/index';
import Rules from './Rules/index';
import Difficulty from './Difficulty/index';
import TranslateCard from './TranslateCard/index';
import RightAnswer from './RightAnswer/index';
import WrongAnswer from './WrongAnswer/index';
import ScoreOverview from './ScoreOverview/index';
import GameOver from './GameOver';
import Game from './Game/index';
import HomePage from './Homepage/index';

const App = ({ onPlayerScore }) => {
  const [isGameSet, setIsGameSet] = useState(false);
  const [gamePlayerData, setGamePlayerData] = useState([]);

  const updateGamePlayerData = (playerObject) => {
    console.log('Update GamePlayerData');
    console.log(playerObject);
    let playerId = playerObject.id;
    setGamePlayerData(
      gamePlayerData.map((item) => {
        return item.id === playerId ? playerObject : item;
      }),
    );
  };

  const handleGamePlayerData = (array) => {
    setGamePlayerData(array);
  };

  const handleIsGameSet = () => setIsGameSet(!isGameSet);

  return (
    <>
      {isGameSet && (
        <Game
          onIsGameSet={handleIsGameSet}
          gamePlayerData={gamePlayerData}
          onUpdateGamePlayerData={updateGamePlayerData}
        />
      )}

      {!isGameSet && (
        <Block>
          <HomePage
            onIsGameSet={handleIsGameSet}
            onGamePlayerData={handleGamePlayerData}
          />
        </Block>
      )}
    </>
  );
};

render(<App />, document.querySelector('#app'));
