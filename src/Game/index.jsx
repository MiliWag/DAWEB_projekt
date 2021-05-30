import React, { useState, useEffect } from 'react';
import './style.css';
import Header from '../Header/index';
import Block from '../Block/index';
import Playground from '../Playground/index';
import Footer from '../Footer/index';
import Tabletop from 'tabletop';

const Game = ({ testPlayerData }) => {
  const [vocabularyData, setVocabularyData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: '1FYTJXxyIAHzPgHTOb3oH4BU-L5zRz4gg5o1y4OhEXaw',
      simpleSheet: true,
    })
      .then((vocabularyData) => setVocabularyData(vocabularyData))
      .catch((err) => console.warn(err));
  }, []);

  const wordsLevelOne = vocabularyData.filter((word) => {
    return word.level === '1';
  });

  const wordsLevelTwo = vocabularyData.filter((word) => {
    return word.level === '2';
  });

  const wordsLevelThree = vocabularyData.filter((word) => {
    return word.level === '3';
  });

  const randomWordIndex = (wordsArray) => {
    return Math.floor(Math.random() * wordsArray.length);
  };

  const randomWordObject = (wordsArray) => {
    return wordsArray[randomWordIndex(wordsArray)];
  };

  const randomWordLevelOne = randomWordObject(wordsLevelOne);

  return (
    <>
      <Header testPlayerData={testPlayerData} />
      <Block classBlock="block--game">
        <Playground />
      </Block>
      <Footer />
      {console.log(vocabularyData)}
    </>
  );
};

export default Game;
