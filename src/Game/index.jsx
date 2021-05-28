import React from 'react';
import './style.css';
import Board from '../Board/index';
import Block from '../Block/index';
import Playground from '../Playground/index';

const Game = () => {
  return (
    <>
      <main className="game">
        <Board />
        <Block> {<Playground />}</Block>
        <div className="contact">
          <p class="contact__text">Nobody is perfect. Objevili jste chybu?</p>
          <a
            href="mailto:padourkova.jindriska@gmail.com"
            className="contact__mail"
          >
            Napište nám
          </a>
        </div>
      </main>
    </>
  );
};

export default Game;
