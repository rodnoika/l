import React from 'react';
<<<<<<< HEAD
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
=======
import GameGenerator from './components/GameGenerator';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <GameGenerator />
    </div>
  );
};
>>>>>>> 8ad4dd9c149f4faa1cca788bafa6310593b341d5

export default App;
