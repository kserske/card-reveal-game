import React, { useState, useEffect } from 'react';
import { RefreshCw, Sparkles, Eye, EyeOff } from 'lucide-react';

const CardRevealGame = () => {
  // Expanded database of words and characters (150+ items)
  const wordBank = [
    // Places
    'Switzerland', 'Paris', 'Tokyo', 'New York', 'London', 'Barcelona', 'Sydney', 'Rome', 
    'Dubai', 'Amsterdam', 'Iceland', 'Maldives', 'Bali', 'Prague', 'Vienna', 'Cairo',
    'Rio de Janeiro', 'Venice', 'Santorini', 'Machu Picchu', 'Grand Canyon', 'Taj Mahal',
    'Great Wall of China', 'Stonehenge', 'Colosseum', 'Petra', 'Angkor Wat', 'Mount Fuji',
    
    // Characters & People
    'Chewbacca', 'Harry Potter', 'Batman', 'Mickey Mouse', 'Sherlock Holmes', 'Superman',
    'Wonder Woman', 'Pikachu', 'Mario', 'Spider-Man', 'Yoda', 'Iron Man', 'Elsa',
    'Darth Vader', 'Luke Skywalker', 'Hermione', 'Gandalf', 'Frodo', 'Dumbledore',
    'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Sonic', 'Pac-Man', 'Lara Croft',
    'Einstein', 'Shakespeare', 'Leonardo da Vinci', 'Beethoven', 'Mozart', 'Picasso',
    
    // Food & Drinks
    'Pizza', 'Sushi', 'Durian', 'Chocolate', 'Coffee', 'Burger', 'Tacos', 'Ramen',
    'Croissant', 'Pasta', 'Ice Cream', 'Pancakes', 'Waffles', 'Boba Tea', 'Matcha',
    'Tiramisu', 'Paella', 'Pho', 'Kimchi', 'Nachos', 'Cheesecake', 'Dumplings',
    
    // Objects & Things
    'Smartphone', 'Guitar', 'Violin', 'Piano', 'Saxophone', 'Telescope', 'Rocket',
    'Bicycle', 'Skateboard', 'Helicopter', 'Submarine', 'Hot Air Balloon', 'Rollercoaster',
    'Ferris Wheel', 'Carousel', 'Trampoline', 'Snowboard', 'Surfboard', 'Crown',
    'Diamond', 'Treasure Chest', 'Magic Wand', 'Crystal Ball', 'Hourglass', 'Compass',
    
    // Nature & Animals
    'Lion', 'Tiger', 'Dragon', 'Phoenix', 'Unicorn', 'Elephant', 'Panda', 'Dolphin',
    'Eagle', 'Butterfly', 'Octopus', 'Whale', 'Penguin', 'Koala', 'Flamingo',
    'Rainbow', 'Aurora', 'Sunset', 'Sunrise', 'Waterfall', 'Volcano', 'Ocean',
    'Desert', 'Forest', 'Mountain', 'Snowflake', 'Lightning', 'Thunder', 'Tornado',
    
    // Entertainment & Activities
    'Concert', 'Basketball', 'Football', 'Tennis', 'Olympics', 'Carnival', 'Circus',
    'Museum', 'Theater', 'Cinema', 'Festival', 'Parade', 'Marathon', 'Safari',
    'Karaoke', 'Dance Party', 'Beach Party', 'Camping', 'Hiking', 'Skydiving',
    
    // Miscellaneous
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
    setAnimatingCard(index);
    setTimeout(() => setAnimatingCard(null), 300);
    
    const newRevealed = [...revealed];
    newRevealed[index] = !newRevealed[index];
    setRevealed(newRevealed);
  };

  const refreshCards = () => {
    setCurrentCards(getRandomCards());
    setRevealed([false, false, false, false, false]);
  };

  const cardGradients = [
    'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
    'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #581c87 50%, #9d174d 100%)',
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
      background: '#a855f7',
      borderRadius: '50%',
      filter: 'blur(80px)',
      opacity: 0.2,
      animation: 'pulse 4s ease-in-out infinite'
    },
    orb2: {
      position: 'absolute',
      bottom: '80px',
      right: '80px',
      width: '300px',
      height: '300px',
      background: '#ec4899',
      borderRadius: '50%',
      filter: 'blur(80px)',
      opacity: 0.2,
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
      background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 100%)',
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
      cursor: 'pointer',
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
      color: isRevealed ? '#059669' : '#9ca3af',
      transition: 'all 0.3s ease'
    }),
    revealText: {
      fontSize: '0.75rem',
      fontWeight: 700,
      color: '#9ca3af'
    },
    newRoundBtn: {
      width: '100%',
      background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #f97316 100%)',
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
      marginTop: '24px',
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
        .card-item:hover { transform: scale(1.02); }
        .card-item:active { transform: scale(0.98); }
        .card-animating { transform: scale(0.95) !important; }
        .card-item:hover .card-glow { opacity: 0.75; }
        .card-item:hover .card-content { border-color: #e5e7eb; }
        .card-item:hover .number-badge { transform: rotate(6deg); }
        .card-item:hover .reveal-icon-default { background: #f3e8ff; color: #9333ea; }
        .new-round-btn:hover { transform: scale(1.05); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .new-round-btn:active { transform: scale(0.95); }
      `}</style>
      
      <div style={styles.container}>
        <div style={styles.orb1}></div>
        <div style={styles.orb2}></div>

        <div style={styles.gameCard}>
          <div style={styles.header}>
            <div style={styles.titleWrapper}>
              <Sparkles color="#fbbf24" size={32} />
              <h1 style={styles.title}>Just Pick</h1>
              <Sparkles color="#fbbf24" size={32} />
            </div>
            <p style={styles.subtitle}>Click the cards to reveal the hidden words!</p>
          </div>

          <div style={styles.cardsGrid}>
            {currentCards.map((word, index) => (
              <div
                key={index}
                onClick={() => toggleReveal(index)}
                className={`card-item ${animatingCard === index ? 'card-animating' : ''}`}
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
                            {Array.from({ length: Math.min(word.length, 12) }).map((_, i) => (
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
                        {revealed[index] ? 'SHOWN' : 'TAP'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={refreshCards} className="new-round-btn" style={styles.newRoundBtn}>
            <RefreshCw size={24} />
            NEW ROUND
          </button>

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

export default CardRevealGame;