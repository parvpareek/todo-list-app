import React, { useEffect, useState } from 'react';
import './ParallaxPage.css';
const sections = [
  {
    image: '../res/12.jpg',
    text: 'Every moment with you is a treasure...',
  },
  {
    image: '../res/2.jpg',
    text: 'Every moment with you is a treasure...',
  },
  {
    image: '../res/3.jpg',
    text: 'You make my life brighter...',
  },
  {
    image: '../res/4.jpg', 
    text: 'my soul, lighter...',
  },
  {
    image: '../res/5.jpg',
    text: 'me, a non-nail biter...',
  },
  {
    image: '../res/6.jpg',
    text: 'haha...',
  },
  {
    image: '../res/7.jpg',
    text: 'You are the prettiest girl i have ever seen. You are so gorgeous...',
  },
  {
    image: '../res/8.jpg',
    text: 'But, you have a much more beautiful soul...',
  },
  {
    image: '../res/9.jpg',
    text: 'wauuuuuuu, headgirl. too much gym you\'re going macha',
  },
  {
    image: '../res/10.jpg',
    text: 'butterfly effect is real...',
  },
  {
    image: '../res/11.jpg',
    text: 'and that butterfly was onto something...',
  },
  {
    image: '../res/1.jpg',
    text: 'Every day is Valentine\'s with you...',
  },
  {
    image: '../res/13.jpg',
    text: '_________hero banegi?_______ jyada hero mat ban🫵🫵',
  },
  {
    image: '../res/14.jpg',
    text: 'zyada hi fotus daldi, script khatam hone lagi',
  },
  {
    image: '../res/15.jpg',
    text: 'kya pose hai. ek aur aisa hi',
  },
  {
    image: '../res/16.jpg',
    text: 'qtpieeeeeeeeee',
  },
  {
    image: '../res/17.jpg',
    text: 'sharma mat'
  },
  {
    image: '../res/18.jpg',
    text: 'I used to think you were a shy girl',
  },
  {
    image: '../res/19.jpg',
    text: 'but the way you proved me wrong is crazy ',
  },
  {
    image: '../res/21.jpg',
    text: 'but, idc. Because you\'re mine',
  },
  {
    image: '../res/20.jpg',
    text: 'And nothing is gonna change that',
  },
  {
    image: '../res/22.jpg',
    text: 'You might not like these pics',
  },
  {
    image: '../res/23.jpg',
    text: 'but these are some of my favourite pictures with you',
  },
  {
    image: '../res/24.jpg',
    text: 'not only because i look good in them',
  },
  {
    image: '../res/25.jpg',
    text: 'but because they capture the emotions i felt with you',
  },
  {
    image: '../res/26.jpg',
    text: 'its crazy how a vector in a high-dimensional pixel space, constrained in a perceptual differential manifold 𝑀 ⊂ 𝑅n(image) can do that',
  },
  {
    image: '../res/27.jpg',
    text: 'its not the image but the love that makes you feel that.',
  },
  {
    image: '../res/28.jpg',
    text: 'because love transcends time, space, dimensions',
  },
  {
    image: '../res/29.jpg',
    text: 'I finally get the phrase \"Pyaar me pagal ho gaya\"',
  },
  {
    image: '../res/32.jpg',
    text: 'because love transcends all that then what is mere human reason',
  },
  {
    image: '../res/30.jpg',
    text: 'aur ho gaya hu pyar me pagal. tere.',
  },
  {
    image: '../res/31.jpg',
    text: 'i love you motuuuu',
  }
];

const ParallaxPage = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [heartScale, setHeartScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = window.innerHeight * 2; // Double the height of each section
      const newSection = Math.floor(scrollPosition / sectionHeight);
      
      if (newSection >= 0 && newSection < sections.length) {
        setCurrentSection(newSection);
      }

      // Update heart scale based on scroll within each section
      const scrollPercent = (scrollPosition % sectionHeight) / sectionHeight;
      setHeartScale(1 + scrollPercent * 0.3); // Increased scale effect
    };

    window.addEventListener('scroll', handleScroll);
    // Double the height for each section
    document.body.style.height = `${sections.length * 200}vh`;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create an array of recursive hearts with larger sizes
  const recursiveHearts = Array.from({ length: 5 }, (_, i) => {
    const scale = 2 + i * 1.5; // Increased base scale and scaling factor
    const opacity = 1 / (i + 1) * 0.5; // Each heart is more transparent
    return (
      <div 
        key={i}
        className="background-heart" 
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${scale * heartScale})`,
          width: '100vw',
          height: '100vh',
          opacity: opacity,
          transition: 'all 0.5s ease-in-out',
          zIndex: -1 - i // Stack hearts behind each other
        }}>
        <div className="heart-shape" style={{
          backgroundColor: '#cc0000', // Darker red
          display: 'inline-block',
          height: '150px', // Increased base heart size
          margin: '0 10px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%) rotate(-45deg)',
          width: '150px', // Increased base heart size
        }}>
          <style>
            {`
              .heart-shape:before,
              .heart-shape:after {
                content: '';
                background-color: #cc0000; // Matching darker red
                border-radius: 50%;
                height: 150px; // Match the main shape size
                position: absolute;
                width: 150px; // Match the main shape size
              }
              .heart-shape:before {
                top: -75px; // Half of height
                left: 0;
              }
              .heart-shape:after {
                left: 75px; // Half of width
                top: 0;
              }
            `}
          </style>
        </div>
      </div>
    );
  });

  return (
    <div className="parallax-wrapper">
      {/* Background hearts with lower z-index */}
      <div className="hearts-container" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensure hearts stay behind content
        pointerEvents: 'none' // Prevent hearts from intercepting clicks
      }}>
        {recursiveHearts}
      </div>

      <div className="parallax-content" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 1 // Ensure content stays above hearts
      }}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`parallax-section ${currentSection === index ? 'active' : ''}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: currentSection === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              pointerEvents: currentSection === index ? 'auto' : 'none',
              width: '100%',
              zIndex: 2 // Ensure sections stay above hearts
            }}
          >
            <div 
              className="card-image"
              style={{
                width: '60vw', // 60% of viewport width
                maxWidth: '800px', // Prevent excessive stretching on large screens
                aspectRatio: '1', // Maintain square aspect ratio
                backgroundImage: `url(${section.image})`,
                backgroundSize: 'contain', // Changed from 'cover' to 'contain'
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '10px',
                
                transition: 'transform 0.3s ease-in-out',
                transform: currentSection === index ? 'scale(1)' : 'scale(0.8)',
              }}
            />
            <div className="text-reveal visible" style={{
              position: 'absolute',
              top: '75%', // Position 75% down from the top (halfway between middle and bottom)
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 3
            }}>
              <h2 style={{ 
                color: 'black',
                textAlign: 'center', 
                fontSize: 'calc(1.5rem + 1vw)', // Responsive font size
                maxWidth: '80%',
                margin: '0 auto',
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}>{section.text}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="final-section" style={{
        position: 'absolute',
        top: `${sections.length * 200}vh`,
        width: '100%',
        zIndex: 2 // Ensure final section stays above hearts
      }}>
        <div className="heart-finale">
          <p style={{
            position: 'absolute',
            top: '10%',
            left: '56%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            fontSize: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
            borderRadius: '8px'
          }}>
            Everything is better with ass in it kissna butt
          </p>
          <div className="heart-shape large"></div>
          <div className="floating-images">
            {sections.map((section, index) => (
              <img
                key={index}
                src={section.image}
                alt="Love"
                className="floating-memory"
                style={{
                  width: '256px',
                  height: '256px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  animationDelay: `${index * 0.5}s`
                }}
              />
            ))}

          </div>

        </div>
        <div className="conclusion" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 3
        }}>
          <h1 style={{
            backgroundColor: '#FFE4E1', // Light pink highlight
            padding: '1rem 2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            color: '#FF1493' // Deep pink text
          }}>You are my everything!</h1>
        </div>
      <h5>Birthday gift bhi isme hi done</h5>
      </div>
    </div>                                                              
  );
};

export default ParallaxPage;
