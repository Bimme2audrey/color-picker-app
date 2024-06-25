import React, { useState } from 'react';
import './App.css';
import Colorist from './components/Colorist';
import AddColor from './components/AddColor';

const App = () => {
  const [colors, setColors] = useState(['red', 'blue', 'green']);
  const [selectedColor, setSelectedColor] = useState('');

  const addColor = (color) => {
    if (!colors.includes(color)) {
      setColors([...colors, color]);
    }
  };

  const removeColor = (color) => {
    setColors(colors.filter(c => c !== color));
  };

  const selectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: selectedColor }}>
      <h1>Color Picker</h1>
      <AddColor onAddColor={addColor} />
      <Colorist 
        colors={colors} 
        onColorSelect={selectColor} 
        onColorRemove={removeColor} 
      />
    </div>
  );
};

export default App;
