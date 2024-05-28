"use client"
import React, { useState } from 'react';

function App() {
  const [circleColor, setCircleColor] = useState('grey');
  const [clickedColor, setClickedColor] = useState('');

  const handleButtonClick = (color: React.SetStateAction<string>) => {
    setCircleColor(color);
    setClickedColor(color);

    // Create a new SpeechSynthesisUtterance instance
    let speech = new SpeechSynthesisUtterance();

    // Set the text of the speech
    speech.text = `You clicked ${color}`;

    // Speak the speech
    window.speechSynthesis.speak(speech);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: circleColor,
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p>You clicked {clickedColor}</p>
      </div>
      <button style={{backgroundColor: 'green'}} onClick={() => handleButtonClick('green')}>Green</button>
      <button style={{backgroundColor: 'blue'}} onClick={() => handleButtonClick('blue')}>Blue</button>
      <button style={{backgroundColor: 'yellow'}} onClick={() => handleButtonClick('yellow')}>Yellow</button>
      <button style={{backgroundColor: 'red'}} onClick={() => handleButtonClick('red')}>Red</button>
    </div>
  );
}

export default App;