import React, { useState } from 'react';
import ValentinePage from './ValentinePage';
import ParallaxPage from './ParallaxPage';
import './styles.css';

function App() {
  const [showParallax, setShowParallax] = useState(false);

  const handleYesClick = () => {
    setShowParallax(true);
  };

  return (
    <div className="App">
      {showParallax ? (
        <ParallaxPage />
      ) : (
        <ValentinePage onYesClick={handleYesClick} />
      )}
    </div>
  );
}

export default App;
