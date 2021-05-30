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
  console.log(vocabularyData);
  console.log([Math.floor(Math.random() * vocabularyData.length)]);

  return (
    <>
      <Header testPlayerData={testPlayerData} />
      <Block classBlock="block--game">
        <Playground />
      </Block>
      <Footer />
    </>
  );
};

export default Game;
