import React, { useState } from 'react';
import './Css_files/gen_character.css';

const GameGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [gameDetails, setGameDetails] = useState('');

  const handleGenerateGame = async () => {
    const insideprompt = "Ты гениально придумываешь названия для вещей, титулы и имена для персонажей";
    const response = await fetch('http://localhost:5000/generate_game', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt,insideprompt })
    });
    const data = await response.json();
    setGameDetails(data.game_details);
  };

  return (
    <div className="container">
      <h1>Name Generator</h1>
      <textarea 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Enter your game prompt here" 
        rows="5" 
        cols="50"
      />
      <br />
      <button onClick={handleGenerateGame}>Generate Rules</button>
      <div className="game-details">
        <h2>Generated Game Details:</h2>
        <pre>{gameDetails}</pre>
      </div>
    </div>
  );
};

export default GameGenerator;