import React from 'react';
import './style.css';

const Button = ({ onClick, nameOfClass, textContent, onPopupOpen, type }) => {
  return (
    <button className={nameOfClass} onClick={onClick} type={type ?? 'button'}>
      {textContent}
    </button>
  );
};

export default Button;
