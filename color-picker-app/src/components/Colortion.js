import React from 'react';
import './ColorOption.css';

const ColorOption = ({ color, onClick, onRemove }) => {
  return (
    <div className="color-option" style={{ backgroundColor: color }}>
      <div className="color-box" onClick={() => onClick(color)}></div>
      <button className="remove-button" onClick={() => onRemove(color)}>Remove</button>
    </div>
  );
};

export default ColorOption;
