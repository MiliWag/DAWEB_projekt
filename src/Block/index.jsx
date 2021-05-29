import React from 'react';
import './style.css';

const Block = ({ children, classBlock }) => {
  return <div className={`block ` + classBlock}>{children}</div>;
};

export default Block;
