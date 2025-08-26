import React, { useState } from 'react';
import './Hero4.css';
import logo from '../../assets/images/AWCLogo-mod-off.png'

const Hero4 = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [wireLength, setWireLength] = useState(60); // Initial wire length
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleWireMouseDown = (e) => {
    setIsDragging(true);
    setHasTriggered(false);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const logoContainer = document.querySelector('.logo-container');
    if (!logoContainer) return;
    
    const rect = logoContainer.getBoundingClientRect();
    const logoBottom = rect.bottom;
    const mouseY = e.clientY;
    const newLength = Math.max(30, Math.min(120, mouseY - logoBottom + 30));
    
    setWireLength(newLength);
    
    // Toggle light when pulled down enough (only once per drag)
    if (newLength > 80 && !hasTriggered) {
      setIsLightOn(!isLightOn);
      setHasTriggered(true);
      playAudio();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Bounce back with different lengths based on light state
    setTimeout(() => {
        if (isLightOn) {
            setWireLength(75);
        }
        else {
            setWireLength(50);
        }  
    }, 100);
  };

  const handleLearnMoreClick = () => {
    if (!isLightOn) {
      // Animate the light turning on
      setWireLength(100); // Simulate pulling the wire
      playAudio();
      setIsLightOn(true);
      
      // Bounce back to "on" position
      setTimeout(() => {
        setWireLength(75);
      }, 300);

      
    }
    
    // Scroll to about section after light animation
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const navbarHeight = 67.74;
        const offset = navbarHeight + 70;
        const elementPosition = aboutSection.offsetTop - offset;

        window.scrollTo ({
            top: elementPosition,
            behavior: 'smooth'
        });

      }
    }, isLightOn ? 0 : 800); // Delay if light needs to turn on first
  };

  const playAudio = () => {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    audio.play().catch(error => {
      console.log('Audio play failed:', error);
    });
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isLightOn, hasTriggered]);

  return (
    <div className={`hero-container ${isLightOn ? 'light-on' : ''}`} id='home'>
      <div className="hero-content">
        {/* left side - logo */}
        <div className="logo-section">
          
          <div className="logo-container">
            <div className="light-blur-effect"></div>
            <img src={logo} alt="awc-logo" className="logo"/>
            <div className="hanging-wire-container">
              <div 
                className="wire" 
                style={{ 
                  height: `${wireLength}px`,
                  transition: isDragging ? 'none' : 'height 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }}
              ></div>
              <div 
                className={`wire-pull ${isDragging ? 'dragging' : ''}`}
                onMouseDown={handleWireMouseDown}
              >
                <div className="pull-ring"></div>
              </div>
            </div>
          </div>
        </div>

        {/* right side - text */}
        <div className="text-section">
            <h2>Welcome to</h2>
            <h1>The Association for Women in Computing @ Virginia Tech</h1>
            <p>Shaping the future of computing, together</p>
          <div className="hero-buttons">
            <a className='btn-primary' href="https://gobblerconnect.vt.edu/organization/awc" target='_blank' rel='noopener noreferrer'>Join Gobblerconnect</a>
            <button className="btn-secondary" onClick={handleLearnMoreClick}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero4;