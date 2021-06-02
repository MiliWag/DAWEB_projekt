import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../Header/index';
import Block from '../Block/index';
import Playground from '../Playground/index';
import Footer from '../Footer/index';
import Tabletop from 'tabletop';
import WhoPlays from '../WhoPlays/index';
import ScoreOverview from '../ScoreOverview/index';

const Game = ({ gamePlayerData, onUpdateGamePlayerData }) => {
  const [vocabularyData, setVocabularyData] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [randomWord, setRandomWord] = useState({
    id: '',
    level: '',
    cz: '',
    en: '',
    en_2: '',
    en_3: '',
    en_4: '',
    en_5: '',
  });

  const [currentPlayer, setCurrentPlayer] = useState(gamePlayerData[0]);
  const numberOfPlayers = gamePlayerData.length;

  useEffect(() => {
    Tabletop.init({
      key: '1FYTJXxyIAHzPgHTOb3oH4BU-L5zRz4gg5o1y4OhEXaw',
      simpleSheet: true,
    })
      .then((vocabularyData) => setVocabularyData(vocabularyData))
      .catch((err) => console.warn(err));
  }, []);
  const getWordsByLevel = (level) => {
    return vocabularyData.filter((word) => word.level === level);
  };

  const getRandomWordObject = (level) => {
    const wordsArray = getWordsByLevel(level);
    const randomWordIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomWordIndex];
  };

  const handleRandomWord = (level) => {
    setRandomWord(getRandomWordObject(level));
  };

  const handlePlayerScore = (number) => {
    setPlayerScore(playerScore + number);
  };

  const handleCurrentPlayer = (playerId) => {
    let playerNumber = numberOfPlayers < playerId ? 1 : playerId;
    const playerObject = gamePlayerData.filter((item) => {
      return item.id === playerNumber;
    });
    setCurrentPlayer(playerObject[0]);
  };

  const updatePlayerScore = (number) => {
    console.log('Získané body: ' + number);
    const newPlayerData = {
      id: currentPlayer.id,
      name: currentPlayer.name,
      color: currentPlayer.color,
      score: currentPlayer.score + number,
    };
    onUpdateGamePlayerData(newPlayerData);
  };

  const [finalPlayerScore, setFinalPlayerScore] = useState(0);
  const finishGame = () => {
    onShowGameOver();
  };

  return (
    <>
      <Header
        randomWordObject={randomWord}
        onRandomWord={handleRandomWord}
        gamePlayerData={gamePlayerData}
        onPlayerScore={handlePlayerScore}
        currentPlayer={currentPlayer}
        onCurrentPlayer={handleCurrentPlayer}
        onUpdatePlayerScore={updatePlayerScore}
        finalPlayerScore={finalPlayerScore}
        onShowGameOver={onShowGameOver}
      />

      <div className="score-board">
        <WhoPlays currentPlayer={currentPlayer} />
        <ScoreOverview
          gamePlayerData={gamePlayerData}
          playerScore={playerScore}
        />
      </div>
      <button onClick={() => setFinalPlayerScore(60)}>přičti</button>
      <Footer />
    </>
  );
};

export default Game;
