import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../Header/index';
import Block from '../Block/index';
import Playground from '../Playground/index';
import Footer from '../Footer/index';
import Tabletop from 'tabletop';
import WhoPlays from '../WhoPlays/index';
import ScoreOverview from '../ScoreOverview/index';
import GameOver from '../GameOver/index';
import Papa from 'papaparse';

const Game = ({ gamePlayerData, onUpdateGamePlayerData, onShowGameOver }) => {
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
  const [showPopup, setShowPopup] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);

  const [showRules, setShowRules] = useState(false);
  const [showTranslateCard, setShowTranslateCard] = useState(false);
  const [showWordLevel, setShowWordLevel] = useState(false);
  const [winner, setWinner] = useState();

  const handleShowRules = () => {
    setShowRules(!showRules);
    handleShowPopup();
  };

  const handleShowTranslateCard = (wordLevel) => {
    setShowTranslateCard(!showTranslateCard);
    setShowRules(false);
    setShowWordLevel(false);
    handleRandomWord(wordLevel);
    handleShowPopup();
  };
  const handleShowWordLevel = () => {
    handleShowPopup();
    setShowWordLevel(!showWordLevel);
  };

  const handleShowPopup = () => setShowPopup(!showPopup);

  const handleShowGameOver = () => {
    setShowGameOver(!showGameOver);
    setShowTranslateCard(false);
  };

  useEffect(() => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/1FYTJXxyIAHzPgHTOb3oH4BU-L5zRz4gg5o1y4OhEXaw/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (vocabularyData) => {
          setVocabularyData(vocabularyData.data);
        },
      },
    );
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
    if (numberOfPlayers >= 2) {
      setCurrentPlayer(playerObject[0]);
    } else {
      setCurrentPlayer(currentPlayer);
    }
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
    if (newPlayerData.score >= 60) {
      handleShowGameOver();
      console.log('hra je ukončena');
      console.log(newPlayerData);
      setWinner(newPlayerData.name);
    }
  };

  window.onbeforeunload = function () {
    return 'Do you really want to leave our brilliant application?';
  };

  return (
    <>
      <Header
        randomWordObject={randomWord}
        gamePlayerData={gamePlayerData}
        onPlayerScore={handlePlayerScore}
        currentPlayer={currentPlayer}
        onCurrentPlayer={handleCurrentPlayer}
        onUpdatePlayerScore={updatePlayerScore}
        handleShowGameOver={onShowGameOver}
        onShowPopup={handleShowPopup}
        showPopup={showPopup}
        showGameOver={showGameOver}
        onShowGameOver={handleShowGameOver}
        showRules={showRules}
        onShowRules={handleShowRules}
        showTranslateCard={showTranslateCard}
        onShowTranslateCard={handleShowTranslateCard}
        showWordLevel={showWordLevel}
        winner={winner}
      />

      <div className="score-board">
        <WhoPlays currentPlayer={currentPlayer} />
        <ScoreOverview
          gamePlayerData={gamePlayerData}
          playerScore={playerScore}
        />
      </div>

      <Footer />
    </>
  );
};

export default Game;
