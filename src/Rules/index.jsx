import React from 'react';
import './style.css';
import Button from '../Button/index';
import HomePage from '../Homepage/index';

const Rules = ({ onShowPopup }) => {
  return (
    <>
      <div className="rules-card">
        <h2 className="rules-card-title">Pravidla</h2>
        <ul className="rules-structure">
          <li className="rules-structure__item">
            Hra je určena pro dva až čtyři hráče. Každý hráč si zvolí své jméno
            a barvu.
          </li>
          <li className="rules-structure__item">
            Kdo je na řadě určuje Slovíčkomat – zobrazuje se v poli „Hraje“.
          </li>
          <li className="rules-structure__item">
            Hráč, který je na tahu, si zvolí úroveň obtížnosti slovíčka (1 – 3,
            kdy 1 je nejlehčí a 3 nejtěžší). Poté se zobrazí karta se slovíčkem
            k překladu. Překlad hráč napíše do připraveného pole a provede
            kontrolu kliknutím na tlačítko „Zkontroluj“.
          </li>
          <li className="rules-structure__item">
            Pokud je jeho odpověď správná, Slovíčkomat automaticky přičte body
            podle zvolené obtížnosti: Úroveň 1 – 1 bod, Úroveň 2 – 2 body,
            Úroveň 3 – 5 bodů.
          </li>
          <li className="rules-structure__item">
            Pokud je odpověď špatně, připisuje si hráč 0 bodů.
          </li>
          <li className="rules-structure__item">
            Hra končí v momentě, kdy jeden z hráčů dosáhne 60 bodů.
          </li>
        </ul>

        <Button
          onClick={onShowPopup}
          nameOfClass="button button--primary medium"
          textContent="Zpět"
        />
      </div>
    </>
  );
};

export default Rules;
