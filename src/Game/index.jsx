import React from 'react';
import './style.css';
import Header from '../Header/index';
import Block from '../Block/index';
import Playground from '../Playground/index';
import Footer from '../Footer/index';

const Game = () => {
  return (
    <>
      <Header />
      <Block classBlock="block--game">
        <Playground />
      </Block>
      <Footer />
    </>
  );
};

export default Game;
