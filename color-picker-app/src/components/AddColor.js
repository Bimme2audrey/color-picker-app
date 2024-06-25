import React, { useState } from 'react';
import './AddColor.css';

const AddColor = ({ onAddColor }) => {
  const [newColor, setNewColor] = useState('');

  const handleAddColor = () => {
    if (newColor) {
      onAddColor(newColor);
      setNewColor('');
    }
  };

  return (
    <div className="add-color">
      <input 
        type="text" 
        value={newColor} 
        onChange={(e) => setNewColor(e.target.value)} 
        placeholder="Enter color code or name" 
      />
      <button onClick={handleAddColor}>Add Color</button>
    </div>
  );
};

export default AddColor;
