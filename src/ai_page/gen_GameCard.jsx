// GameGenerator.jsx
import React, { useState } from 'react';
import './Css_files/gen_GameCard.css';

const GameGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [gameDetails, setGameDetails] = useState('');
  const [imageData, setImageData] = useState('');

  const handleGenerateGame = async () => {
    const insideprompt ="Ты генератор понятных описаний карточек из настольных игр, это может быть карточка персонажа, карточка предмета, карточка способности/закллинания или карточка действия, в карточке должно быть написана раса персонажа(если это персонаж), цифра силы и уровень силы карточки";
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
      <h1>Card Generator</h1>
      <textarea 
        value={prompt} 
        onChange={(e) => setPrompt(e.target.value)} 
        placeholder="Enter your game prompt here" 
        rows="5" 
        cols="50"
      />
      <br />
      <button onClick={handleGenerateGame}>Generate Text</button>
      <button onClick={handleGenerateImage}>Generate Image</button>
      <div className="card">
        {imageData && <img src={imageData} alt="Generated" className="card-image" />}
        <div className="card-details">
          <h2>Описание</h2>
          <pre>{gameDetails}</pre>
        </div>
      </div>
    </div>
  );
};

export default GameGenerator;