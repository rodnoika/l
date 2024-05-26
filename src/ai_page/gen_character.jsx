// GameGenerator.jsx
import React, { useState } from 'react';
import './Css_files/gen_character.css';

const GameGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [gameDetails, setGameDetails] = useState('');
  const [imageData, setImageData] = useState('');

  const handleGenerateGame = async () => {
    const insideprompt = "Ты генератор интересных, оссобеных и не законченных историй персонажей у игрока 1 уровня(не пиши про уровень) для игры в Dnd";
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

  const handleGenerateImage = async () => {
    const response = await fetch('http://localhost:5000/generate_image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    if (data.image_data) {
      setImageData(`data:image/jpeg;base64,${data.image_data}`);
    } else {
      alert('Failed to generate image');
    }
  };

  return (
    <div className="container">
      <h1>Character Generator</h1>
      <textarea 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Enter your game prompt here" 
        rows="5" 
        cols="50"
      />
      <br />
      <button onClick={handleGenerateGame}>Generate Game</button>
      <button onClick={handleGenerateImage}>Generate Image</button>
      <div className="game-details">
        <h2>Generated Game Details:</h2>
        <pre>{gameDetails}</pre>
      </div>
      <div className="image-container">
        <h2>Generated Image:</h2>
        {imageData && <img src={imageData} alt="Generated" />}
      </div>
    </div>
  );
};

export default GameGenerator;