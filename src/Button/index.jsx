import React from 'react';
import './style.css';

const Button = ({ onClick, nameOfClass, textContent, onPopupOpen }) => {
  return (
    <button className={nameOfClass} onClick={onClick}>
      {textContent}
    </button>
  );
};

export default Button;
