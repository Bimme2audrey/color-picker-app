// src/components/colorList.js
import React from 'react';
import ColorOption from './Colortion.js';

const ColorIist = ({ colors, onColorSelect, onColorRemove }) => {
  return (
    <div className="color-list">
      {colors.map(color => (
        <ColorOption key={color} color={color} onClick={onColorSelect} onRemove={onColorRemove} />
      ))}
    </div>
  );
};

export default ColorIist;

