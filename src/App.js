import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const CardRevealGame = () => {
  // Database of words and characters
  const wordBank = [
    'School', 'Chewbacca', 'Concert', 'Durian', 'Switzerland',
    'Pizza', 'Eiffel Tower', 'Dragon', 'Smartphone', 'Beach',
    'Harry Potter', 'Basketball', 'Sushi', 'Mount Everest', 'Guitar',
    'Shakespeare', 'Coffee', 'Astronaut', 'Paris', 'Violin',
    'Einstein', 'Rainbow', 'Japan', 'Bicycle', 'Beethoven',
    'Chocolate', 'Lion', 'Amazon', 'Telescope', 'Mona Lisa',
    'Thunder', 'Pyramids', 'Batman', 'Ocean', 'Piano',
    'Volcano', 'Sherlock Holmes', 'Sunset', 'Rocket', 'Tiger',
    'Leonardo da Vinci', 'Waterfall', 'New York', 'Snowflake', 'Saxophone',
    'Dinosaur', 'Mickey Mouse', 'Canyon', 'Lighthouse', 'Mozart'
  ];

  const [currentCards, setCurrentCards] = useState([]);
  const [revealed, setRevealed] = useState([false, false, false, false, false]);

  // Function to get 5 random unique words
  const getRandomCards = () => {
    const shuffled = [...wordBank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  };

  // Initialize cards on mount
  useEffect(() => {
    setCurrentCards(getRandomCards());
  }, []);

  // Toggle reveal for a specific card
  const toggleReveal = (index) => {
    const newRevealed = [...revealed];
    newRevealed[index] = !newRevealed[index];
    setRevealed(newRevealed);
  };

  // Refresh all cards
  const refreshCards = () => {
    setCurrentCards(getRandomCards());
    setRevealed([false, false, false, false, false]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Card Reveal Game</h1>
          <button
            onClick={refreshCards}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <RefreshCw size={20} />
            New Round
          </button>
        </div>

        <div className="space-y-4">
          {currentCards.map((word, index) => (
            <div
              key={index}
              onClick={() => toggleReveal(index)}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all transform hover:scale-102 border-2 border-transparent hover:border-purple-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                    {index + 1}
                  </div>
                  <div className="text-2xl font-semibold text-gray-800">
                    {revealed[index] ? word : '???'}
                  </div>
                </div>
                <div className="text-sm text-gray-500 italic">
                  {revealed[index] ? 'Click to hide' : 'Click to reveal'}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600 text-sm">
          Click on any number to reveal or hide the word
        </div>
      </div>
    </div>
  );
};

export default CardRevealGame;