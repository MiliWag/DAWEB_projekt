import React from 'react';
import './style.css';

const PopupWindow = (props) => {
  return (
    <div class="popup-window">
      <div class="popup-window-background"></div>
      <div class="popup-window-front">{props.childern}</div>
    </div>
  );
};

export default PopupWindow;
