import React, { useEffect, useState, Fragment } from 'react';
import './style.css';
import Button from '../Button/index';
/* import Tabletop from 'tabletop';

function Sheet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: '1FYTJXxyIAHzPgHTOb3oH4BU-L5zRz4gg5o1y4OhEXaw',
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  console.log(data);
} */

const TranslateCard = ({ word, translation }) => {
  return (
    <>
      <div className="translate-card">
        <span className="translate-card__word">{word}</span>
        <span className="translate-card__text">Napiš překlad:</span>
        <input
          className="translate-card__translation"
          type="text"
          id="translation"
          name="translation"
        />
        {translation}
        <Button
          nameOfClass="button button--primary medium"
          link="#"
          textContent="Zkontroluj"
        />
      </div>
      {/*       <h1>data from google sheets</h1>
      <ul>
        {data.map((item, i) => (
          <ul key={i}>
            <li>ID - {item.ID}</li>
            <li>Level - {item.Level}</li>
            <li>ČJ -- {item.Cz}</li>
            <li>AJ - {item.En}</li>
          </ul>
        ))}
      </ul> */}
    </>
  );
};

export default TranslateCard;
