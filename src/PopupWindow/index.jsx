import React from 'react';
import './style.css';

const PopupWindow = ({ content }) => {
  return (
    <div className="popup-window">
      <div className="popup-window-background"></div>
      <div className="popup-window-front">{content}</div>
    </div>
  );
};

export default PopupWindow;
