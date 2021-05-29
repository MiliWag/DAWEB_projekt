import React from 'react';
import './style.css';
import Header from '../Header/index';
import Block from '../Block/index';
import Playground from '../Playground/index';

const Game = () => {
  return (
    <>
      <Header />
      <Block content={<Playground />} classBlock="block--game" />
      <footer className="contact">
        <p class="contact__text">Nobody is perfect. Objevili jste chybu?</p>
        <a
          href="mailto:padourkova.jindriska@gmail.com"
          className="contact__mail"
        >
          Napište nám
        </a>
      </footer>
    </>
  );
};

export default Game;
