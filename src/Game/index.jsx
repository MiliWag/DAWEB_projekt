import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../Header/index';
import Block from '../Block/index';
import Playground from '../Playground/index';
import Footer from '../Footer/index';
import Tabletop from 'tabletop';
import WhoPlays from '../WhoPlays/index';
import ScoreOverview from '../ScoreOverview/index';

const Game = ({ testPlayerData }) => {
  const [vocabularyData, setVocabularyData] = useState([]);
  /*  const [playerScore, setPlayerScore] = useState(0); */
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

  /*  const handlePlayerScore = () => {
    setPlayerScore(playerScore + Number(randomWordObject.level));
  };
  console.log(playerScore); */
  // const randomWordCZ = randomWord.cz;
  return (
    <>
      <Header
        randomWordObject={randomWord}
        onRandomWord={handleRandomWord}
        testPlayerData={testPlayerData}
        /*  onPlayerScore={handlePlayerScore} */
      />

      <div className="score-board">
        <WhoPlays color="who-play__color" />
        <ScoreOverview testPlayerData={testPlayerData} />
      </div>

      <Footer />
    </>
  );
};

export default Game;
