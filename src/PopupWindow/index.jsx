import React from 'react';
import './style.css';

const PopupWindow = ({ children, nameOfClass }) => {
  return (
    <div className={nameOfClass}>
      <div className="popup-window-background"></div>
      <div className="popup-window-front">{children}</div>
    </div>
  );
};

export default PopupWindow;
