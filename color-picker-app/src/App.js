import React, { useState } from 'react';
import ColorList from './colorList';
import './App.css';


const App = () => {
  const [bgColor, setBgColor] = useState('white');
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

  const handleColorClick = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <h1>Select a Color</h1>
      <ColorList colors={colors} onColorClick={handleColorClick} />
    </div>
  );
};

export default App;



