import React from 'react';

const ValentinePage = ({ onYesClick }) => {
  // Function to randomly reposition the "No" button
  const handleNoHover = (e) => {
    const button = e.target;
    const container = document.getElementById('valentine-container');
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const randomX = Math.random() * (containerRect.width - buttonWidth);
    const randomY = Math.random() * (containerRect.height - buttonHeight);
    
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  };

  return (
    <div id="valentine-container" className="valentine-container">
      <h1>Will you be my valentine?</h1>
      <div className="button-group">
        <button className="yes-button" onClick={onYesClick}>
          Yes
        </button>
        <button className="no-button" onMouseEnter={handleNoHover}>
          No
        </button>
      </div>
    </div>
  );
};

export default ValentinePage;
