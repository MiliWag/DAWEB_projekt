import React from 'react';
import './style.css';

const Button = (nameOfClass, link, textContent) => {
  return (
    <a className={nameOfClass} href={link}>
      {textContent}
    </a>
  );
};

export default Button;
