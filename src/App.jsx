import React from 'react';
import './App.css';
import Header from './main_page/Header';
import HeroSection from './main_page/HeroSection';
import PopularGames from './main_page/PopularGames';
import GameCategories from './main_page/GameCategories';
import Footer from './main_page/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PopularGames />
      <GameCategories />
      <Footer />
    </div>
  );
}

export default App;
