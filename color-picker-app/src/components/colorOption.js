// src/components/colorOption.js
import React from 'react';

const ColorOption = ({ color, onSelectColor, onRemoveColor }) => (
  <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
    <div
      style={{ backgroundColor: color, width: '50px', height: '50px', cursor: 'pointer' }}
      onClick={() => onSelectColor(color)}
    ></div>
    <button onClick={() => onRemoveColor(color)} style={{marginLeft: '10px' }}>
      Remove
    </button>
  </div>
);

export default ColorOption;
