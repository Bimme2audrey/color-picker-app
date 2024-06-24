// src/components/colorList.js
import React from 'react';
import ColorOption from './colorOption';

const ColorList = ({ colors, onSelectColor, onRemoveColor }) => (
  <div>
    {colors.map((color) => (
      <ColorOption key={color} color={color} onSelectColor={onSelectColor} onRemoveColor={onRemoveColor} />
    ))}
  </div>
);

export default ColorList;
