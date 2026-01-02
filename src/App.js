import React, { useState, useEffect } from 'react';
import { RefreshCw, Sparkles, Eye, EyeOff, MessageSquare, Grid3x3 } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('game'); // 'game', 'message', or 'preview'
  const [previewMessage, setPreviewMessage] = useState('');

  return (
    <div>
      {currentPage === 'game' ? (
        <CardRevealGame setCurrentPage={setCurrentPage} />
      ) : currentPage === 'message' ? (
        <BigAssMessage setCurrentPage={setCurrentPage} setPreviewMessage={setPreviewMessage} />
      ) : (
        <MessagePreview setCurrentPage={setCurrentPage} message={previewMessage} />
      )}
    </div>
  );
};

const CardRevealGame = ({ setCurrentPage }) => {
  const wordBank = [
    'Switzerland', 'Paris', 'Tokyo', 'New York', 'London', 'Barcelona', 'Sydney', 'Rome', 
    'Dubai', 'Amsterdam', 'Iceland', 'Maldives', 'Bali', 'Prague', 'Vienna', 'Cairo',
    'Rio de Janeiro', 'Venice', 'Santorini', 'Machu Picchu', 'Grand Canyon', 'Taj Mahal',
    'Great Wall of China', 'Stonehenge', 'Colosseum', 'Petra', 'Angkor Wat', 'Mount Fuji',
    'Chewbacca', 'Harry Potter', 'Batman', 'Mickey Mouse', 'Sherlock Holmes', 'Superman',
    'Wonder Woman', 'Pikachu', 'Mario', 'Spider-Man', 'Yoda', 'Iron Man', 'Elsa',
    'Darth Vader', 'Luke Skywalker', 'Hermione', 'Gandalf', 'Frodo', 'Dumbledore',
    'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Sonic', 'Pac-Man', 'Lara Croft',
    'Einstein', 'Shakespeare', 'Leonardo da Vinci', 'Beethoven', 'Mozart', 'Picasso',
    'Pizza', 'Sushi', 'Durian', 'Chocolate', 'Coffee', 'Burger', 'Tacos', 'Ramen',
    'Croissant', 'Pasta', 'Ice Cream', 'Pancakes', 'Waffles', 'Boba Tea', 'Matcha',
    'Tiramisu', 'Paella', 'Pho', 'Kimchi', 'Nachos', 'Cheesecake', 'Dumplings',
    'Smartphone', 'Guitar', 'Violin', 'Piano', 'Saxophone', 'Telescope', 'Rocket',
    'Bicycle', 'Skateboard', 'Helicopter', 'Submarine', 'Hot Air Balloon', 'Rollercoaster',
    'Ferris Wheel', 'Carousel', 'Trampoline', 'Snowboard', 'Surfboard', 'Crown',
    'Diamond', 'Treasure Chest', 'Magic Wand', 'Crystal Ball', 'Hourglass', 'Compass',
    'Lion', 'Tiger', 'Dragon', 'Phoenix', 'Unicorn', 'Elephant', 'Panda', 'Dolphin',
    'Eagle', 'Butterfly', 'Octopus', 'Whale', 'Penguin', 'Koala', 'Flamingo',
    'Rainbow', 'Aurora', 'Sunset', 'Sunrise', 'Waterfall', 'Volcano', 'Ocean',
    'Desert', 'Forest', 'Mountain', 'Snowflake', 'Lightning', 'Thunder', 'Tornado',
    'Concert', 'Basketball', 'Football', 'Tennis', 'Olympics', 'Carnival', 'Circus',
    'Museum', 'Theater', 'Cinema', 'Festival', 'Parade', 'Marathon', 'Safari',
    'Karaoke', 'Dance Party', 'Beach Party', 'Camping', 'Hiking', 'Skydiving',
    'School', 'Library', 'Castle', 'Pyramid', 'Lighthouse', 'Bridge', 'Skyscraper',
    'Windmill', 'Fountain', 'Garden', 'Aquarium', 'Zoo', 'Amusement Park',
    'Time Machine', 'Portal', 'UFO', 'Space Station', 'Black Hole', 'Galaxy',
    'Meteor', 'Comet', 'Constellation', 'Nebula', 'Supernova'
  ];

  const [currentCards, setCurrentCards] = useState([]);
  const [revealed, setRevealed] = useState([false, false, false, false, false]);
  const [animatingCard, setAnimatingCard] = useState(null);

  const getRandomCards = React.useCallback(() => {
    const shuffled = [...wordBank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []);

  useEffect(() => {
    setCurrentCards(getRandomCards());
  }, [getRandomCards]);

  const toggleReveal = (index) => {
    if (revealed[index]) return;
    
    setAnimatingCard(index);
    setTimeout(() => setAnimatingCard(null), 300);
    
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);
  };

  const refreshCards = () => {
    setCurrentCards(getRandomCards());
    setRevealed([false, false, false, false, false]);
  };

  const cardGradients = [
    'linear-gradient(135deg, #64748b 0%, #475569 100%)',
    'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
    'linear-gradient(135deg, #71717a 0%, #52525b 100%)',
    'linear-gradient(135deg, #78716c 0%, #57534e 100%)',
    'linear-gradient(135deg, #737373 0%, #525252 100%)'
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    orb1: {
      position: 'absolute',
      top: '80px',
      left: '80px',
      width: '300px',
      height: '300px',
      background: '#6b7280',
      borderRadius: '50%',
      filter: 'blur(80px)',
      opacity: 0.15,
      animation: 'pulse 4s ease-in-out infinite'
    },
    orb2: {
      position: 'absolute',
      bottom: '80px',
      right: '80px',
      width: '300px',
      height: '300px',
      background: '#9ca3af',
      borderRadius: '50%',
      filter: 'blur(80px)',
      opacity: 0.15,
      animation: 'pulse 4s ease-in-out infinite 2s'
    },
    gameCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '40px',
      maxWidth: '900px',
      width: '100%',
      position: 'relative',
      zIndex: 1
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '8px'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 900,
      background: 'linear-gradient(90deg, #374151 0%, #1f2937 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '2px'
    },
    subtitle: {
      color: '#4b5563',
      fontWeight: 600,
      fontSize: '1rem'
    },
    cardsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginBottom: '24px'
    },
    cardItem: {
      position: 'relative',
      transition: 'transform 0.3s ease'
    },
    cardGlow: {
      position: 'absolute',
      inset: 0,
      borderRadius: '16px',
      filter: 'blur(8px)',
      opacity: 0.5,
      transition: 'opacity 0.3s ease'
    },
    cardContent: {
      position: 'relative',
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '2px solid #f3f4f6',
      transition: 'border-color 0.3s ease'
    },
    cardInner: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    cardLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      flex: 1
    },
    numberBadge: {
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 900,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    wordArea: {
      flex: 1,
      minHeight: '48px',
      display: 'flex',
      alignItems: 'center'
    },
    wordRevealed: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#1f2937',
      animation: 'fadeIn 0.3s ease-out'
    },
    wordHidden: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    },
    placeholderBar: {
      width: '12px',
      height: '32px',
      background: 'linear-gradient(180deg, #d1d5db 0%, #9ca3af 100%)',
      borderRadius: '4px',
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    },
    revealIconWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px'
    },
    revealIcon: (isRevealed) => ({
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isRevealed ? '#d1fae5' : '#f3f4f6',
      color: isRevealed ? '#059669' : '#6b7280',
      transition: 'all 0.3s ease'
    }),
    revealText: {
      fontSize: '0.75rem',
      fontWeight: 700,
      color: '#9ca3af'
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
      marginBottom: '24px'
    },
    newRoundBtn: {
      flex: 1,
      background: 'linear-gradient(90deg, #4b5563 0%, #374151 50%, #1f2937 100%)',
      color: 'white',
      border: 'none',
      padding: '16px',
      borderRadius: '16px',
      fontSize: '1.125rem',
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    switchPageBtn: {
      flex: 1,
      background: 'linear-gradient(90deg, #6b7280 0%, #4b5563 100%)',
      color: 'white',
      border: 'none',
      padding: '16px',
      borderRadius: '16px',
      fontSize: '1.125rem',
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    },
    footerStats: {
      marginTop: '0',
      textAlign: 'center'
    },
    statsBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: '#f3f4f6',
      padding: '8px 16px',
      borderRadius: '999px',
      fontSize: '0.875rem',
      fontWeight: 700,
      color: '#4b5563'
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .card-item:not(.card-revealed) { cursor: pointer; }
        .card-item.card-revealed { cursor: default; opacity: 0.85; }
        .card-item:not(.card-revealed):hover { transform: scale(1.02); }
        .card-item:not(.card-revealed):active { transform: scale(0.98); }
        .card-animating { transform: scale(0.95) !important; }
        .card-item:not(.card-revealed):hover .card-glow { opacity: 0.75; }
        .card-item:not(.card-revealed):hover .card-content { border-color: #e5e7eb; }
        .card-item:not(.card-revealed):hover .number-badge { transform: rotate(6deg); }
        .card-item:not(.card-revealed):hover .reveal-icon-default { background: #e5e7eb; color: #374151; }
        .new-round-btn:hover, .switch-page-btn:hover { transform: scale(1.05); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .new-round-btn:active, .switch-page-btn:active { transform: scale(0.95); }
      `}</style>
      
      <div style={styles.container}>
        <div style={styles.orb1}></div>
        <div style={styles.orb2}></div>

        <div style={styles.gameCard}>
          <div style={styles.header}>
            <div style={styles.titleWrapper}>
              <Sparkles color="#6b7280" size={32} />
              <h1 style={styles.title}>CARD REVEAL</h1>
              <Sparkles color="#6b7280" size={32} />
            </div>
            <p style={styles.subtitle}>Click the cards to reveal the hidden words!</p>
          </div>

          <div style={styles.cardsGrid}>
            {currentCards.map((word, index) => (
              <div
                key={index}
                onClick={() => toggleReveal(index)}
                className={`card-item ${revealed[index] ? 'card-revealed' : ''} ${animatingCard === index ? 'card-animating' : ''}`}
                style={styles.cardItem}
              >
                <div className="card-glow" style={{...styles.cardGlow, background: cardGradients[index]}}></div>
                
                <div className="card-content" style={styles.cardContent}>
                  <div style={styles.cardInner}>
                    <div style={styles.cardLeft}>
                      <div className="number-badge" style={{...styles.numberBadge, background: cardGradients[index]}}>
                        {index + 1}
                      </div>
                      
                      <div style={styles.wordArea}>
                        {revealed[index] ? (
                          <div style={styles.wordRevealed}>
                            {word}
                          </div>
                        ) : (
                          <div style={styles.wordHidden}>
                            {Array.from({ length: 10 }).map((_, i) => (
                              <div
                                key={i}
                                style={{...styles.placeholderBar, animationDelay: `${i * 50}ms`}}
                              ></div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={styles.revealIconWrapper}>
                      <div 
                        className={revealed[index] ? '' : 'reveal-icon-default'}
                        style={styles.revealIcon(revealed[index])}
                      >
                        {revealed[index] ? <Eye size={24} /> : <EyeOff size={24} />}
                      </div>
                      <span style={styles.revealText}>
                        {revealed[index] ? 'SHOWN' : 'CLICK'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.buttonGroup}>
            <button onClick={refreshCards} className="new-round-btn" style={styles.newRoundBtn}>
              <RefreshCw size={24} />
              NEW ROUND
            </button>
            <button onClick={() => setCurrentPage('message')} className="switch-page-btn" style={styles.switchPageBtn}>
              <MessageSquare size={24} />
              BIG MESSAGE
            </button>
          </div>

          <div style={styles.footerStats}>
            <div style={styles.statsBadge}>
              <span>Revealed: {revealed.filter(r => r).length} / 5</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BigAssMessage = ({ setCurrentPage, setPreviewMessage }) => {
  const [message, setMessage] = useState('');
  const [fontSize, setFontSize] = useState(200);

  const handlePreview = () => {
    setPreviewMessage(message);
    setCurrentPage('preview');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative'
    },
    backButton: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      background: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#1f2937',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      zIndex: 10
    },
    controlPanel: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '30px',
      maxWidth: '600px',
      width: '100%',
      marginBottom: '40px',
      zIndex: 1
    },
    title: {
      fontSize: '2rem',
      fontWeight: 900,
      background: 'linear-gradient(90deg, #374151 0%, #1f2937 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
      marginBottom: '24px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: 700,
      color: '#4b5563',
      marginBottom: '8px'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      resize: 'vertical',
      fontFamily: 'inherit',
      minHeight: '100px'
    },
    slider: {
      width: '100%',
      height: '8px',
      borderRadius: '4px',
      outline: 'none',
      WebkitAppearance: 'none',
      background: '#e5e7eb',
      cursor: 'pointer'
    },
    displayArea: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '40px',
      textAlign: 'center'
    },
    bigText: {
      fontSize: `${fontSize}px`,
      fontWeight: 900,
      color: 'white',
      wordBreak: 'break-word',
      lineHeight: 1.2,
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
      maxWidth: '100%',
      textTransform: 'uppercase'
    },
    previewButton: {
      width: '100%',
      background: 'linear-gradient(90deg, #059669 0%, #047857 100%)',
      color: 'white',
      border: 'none',
      padding: '16px',
      borderRadius: '16px',
      fontSize: '1.125rem',
      fontWeight: 700,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      marginTop: '12px'
    }
  };

  return (
    <>
      <style>{`
        .back-button:hover { transform: scale(1.05); }
        .back-button:active { transform: scale(0.95); }
        .preview-button:hover { transform: scale(1.05); }
        .preview-button:active { transform: scale(0.95); }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4b5563;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4b5563;
          cursor: pointer;
          border: none;
        }
      `}</style>
      
      <div style={styles.container}>
        <button 
          onClick={() => setCurrentPage('game')} 
          className="back-button"
          style={styles.backButton}
        >
          <Grid3x3 size={20} />
          BACK TO GAME
        </button>

        <div style={styles.controlPanel}>
          <h1 style={styles.title}>BIG ASS MESSAGE</h1>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Your Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              style={styles.textarea}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Font Size: {fontSize}px</label>
            <input
              type="range"
              min="50"
              max="400"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              style={styles.slider}
            />
          </div>

          <button 
            onClick={handlePreview} 
            className="preview-button"
            style={styles.previewButton}
            disabled={!message.trim()}
          >
            <MessageSquare size={24} />
            FULLSCREEN PREVIEW
          </button>
        </div>

        <div style={styles.displayArea}>
          <div style={styles.bigText}>
            {message || 'Type something...'}
          </div>
        </div>
      </div>
    </>
  );
};

const MessagePreview = ({ setCurrentPage, message }) => {
  const textRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [calculatedFontSize, setCalculatedFontSize] = React.useState(100);

  React.useEffect(() => {
    // Enter fullscreen when component mounts
    const enterFullscreen = async () => {
      try {
        if (containerRef.current && containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if (containerRef.current && containerRef.current.webkitRequestFullscreen) {
          await containerRef.current.webkitRequestFullscreen();
        }
      } catch (err) {
        console.log('Fullscreen not supported or denied');
      }
    };

    enterFullscreen();

    const calculateFontSize = () => {
      if (!textRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const text = textRef.current;
      
      const containerWidth = container.clientWidth * 0.9;
      const containerHeight = container.clientHeight * 0.9;
      
      let fontSize = 500;
      text.style.fontSize = `${fontSize}px`;
      
      while ((text.scrollWidth > containerWidth || text.scrollHeight > containerHeight) && fontSize > 10) {
        fontSize -= 5;
        text.style.fontSize = `${fontSize}px`;
      }
      
      setCalculatedFontSize(fontSize);
    };

    calculateFontSize();
    window.addEventListener('resize', calculateFontSize);
    
    return () => {
      window.removeEventListener('resize', calculateFontSize);
      // Exit fullscreen when component unmounts
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    };
  }, [message]);

  const handleClick = () => {
    // Exit fullscreen and go back
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
    setCurrentPage('message');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100vw',
      background: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer'
    },
    textContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    text: {
      color: 'white',
      fontWeight: 900,
      lineHeight: 1.1,
      wordBreak: 'break-word',
      textShadow: '0 4px 30px rgba(255, 255, 255, 0.3)',
      maxWidth: '100%',
      maxHeight: '100%',
      whiteSpace: 'pre-wrap',
      textTransform: 'uppercase'
    }
  };

  return (
    <>
      <style>{`
        .preview-container:hover {
          background: #0a0a0a;
        }
      `}</style>
      
      <div 
        style={styles.container} 
        ref={containerRef} 
        onClick={handleClick}
        className="preview-container"
      >
        <div style={styles.textContainer}>
          <div 
            ref={textRef}
            style={styles.text}
          >
            {message || 'No message'}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;