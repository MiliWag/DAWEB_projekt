import React from 'react';
import './style.css';

const Block = ({ content, classBlock }) => {
  return <div className={`block ` + classBlock}>{content}</div>;
};

export default Block;
