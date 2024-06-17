import React from 'react';
import ColorOption from './colorOption';

const ColorList = ({ colors, onColorClick }) => {
  return (
    <div className="color-list">
      {colors.map((color) => (
        <ColorOption 
          key={color} 
          color={color} 
          onClick={onColorClick} 
        />
      ))}
    </div>
  );
};

export default ColorList;

