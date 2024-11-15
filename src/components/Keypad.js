import React from 'react';

function Keypad() {
  // Event handler for the 'change' event
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <input 
      type="password" 
      onChange={handleChange} 
      placeholder="Enter password" 
    />
  );
}

export default Keypad;
