import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Homepage = () => {
  return (
    <div class="block">
      <img
        src="src/img/slovickomat_obdelnik.svg')"
        alt="homepage-logo"
        class="homepage-logo"
      />
      <h1 class="block-text">Procvičte si anglická slovíčka v naší hře</h1>

      <div class="homepage-buttons">
        <a class="button button--secondary" href="rules.html">
          Jak na to?
        </a>
        <a class="button button--primary" href="game.html">
          Hrát
        </a>
      </div>
    </div>
  );
};

render(<Homepage />, document.querySelector('.homepage'));
