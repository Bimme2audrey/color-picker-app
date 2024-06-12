import React from 'react';

const ColorOption = ({ color, onClick }) => {
  const handleClick = () => {
    onClick(color);
  };

  return (
    <div 
      className="color-option" 
      style={{ backgroundColor: color }} 
      onClick={handleClick}
    >
      {color}
    </div>
  );
};

export default ColorOption;
