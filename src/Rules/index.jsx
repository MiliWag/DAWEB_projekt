import React from 'react';
import './style.css';
import Button from '../Button/index';
import HomePage from '../Homepage/index';

const Rules = () => {
  return (
    <>
      <div className="rules-card">
        <h2 className="rules-card-title">Pravidla</h2>
        <ul className="rules-structure">
          <li className="rules-structure__item">
            Hra je určena pro jednoho až čtyři hráče. Každý hráč si zvolí své
            jméno a barvu.
          </li>
          <li className="rules-structure__item">
            Kdo je na řadě určuje Slovíčkomat – zobrazuje se v poli „Hraje“.
          </li>
          <li className="rules-structure__item">
            Hráč, který je na tahu, klikne na tlačítko „HRAJ!“ a zvolí si úroveň
            obtížnosti slovíčka (1 – 3, kdy 1 je nejlehčí a 3 nejtěžší). Poté se
            zobrazí karta se slovíčkem k překladu. Překlad hráč napíše do
            připraveného pole a provede kontrolu kliknutím na tlačítko
            „Zkontroluj“.
          </li>
          <li className="rules-structure__item">
            Pokud je jeho odpověď správná, Slovíčkomat automaticky přičte body
            podle zvolené obtížnosti a hráč postoupí o daný počet políček:
            Obtížnost 1 – 1 bod, obtížnost 2 – 2 body, obtížnost 3 – 3 body.
          </li>
          <li className="rules-structure__item">
            Pokud je odpověď špatně, připisuje si hráč 0 bodů a nepostupuje.
          </li>
          <li className="rules-structure__item">
            Hra končí v momentě, kdy jeden z hráčů dojde do cíle.
          </li>
        </ul>

        <Button
          onClick={<HomePage />}
          nameOfClass="button button--primary border"
          textContent="Zpět"
        />
      </div>
    </>
  );
};

export default Rules;
