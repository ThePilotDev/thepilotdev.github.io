import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

const CARD_PAIRS = ['🍎', '🍕', '🚀', '🎮', '💎', '⭐', '🔥', '💧'];

export const MemoryGame = () => {
  const [cards, setCards] = useState<{ id: number; symbol: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    const shuffled = [...CARD_PAIRS, ...CARD_PAIRS]
      .sort(() => Math.random() - 0.5)
      .map((symbol, i) => ({ id: i, symbol, isFlipped: false, isMatched: false }));
    setCards(shuffled);
    setFlippedIds([]);
    setMoves(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedIds.length === 2) return;
    if (flippedIds.includes(id)) return;
    
    const card = cards.find(c => c.id === id);
    if (!card || card.isMatched) return;

    const newFlipped = [...flippedIds, id];
    setFlippedIds(newFlipped);
    
    setCards(cards.map(c => c.id === id ? { ...c, isFlipped: true } : c));

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const first = cards.find(c => c.id === newFlipped[0]);
      const second = cards.find(c => c.id === newFlipped[1]);

      if (first?.symbol === second?.symbol) {
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            newFlipped.includes(c.id) ? { ...c, isMatched: true } : c
          ));
          setFlippedIds([]);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            newFlipped.includes(c.id) ? { ...c, isFlipped: false } : c
          ));
          setFlippedIds([]);
        }, 1000);
      }
    }
  };

  const isWon = cards.length > 0 && cards.every(c => c.isMatched);

  return (
    <div className="flex flex-col items-center justify-center p-6 glassmorphism rounded-3xl w-[350px]">
      <div className="flex justify-between items-center w-full mb-6">
        <h3 className="font-bold text-xl minecraft-font text-white">Memory</h3>
        <div className="flex items-center gap-4">
          <span className="text-zinc-400 font-mono">Moves: {moves}</span>
          <button onClick={initializeGame} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <RotateCcw className="w-5 h-5 text-zinc-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 w-full mb-4">
        {cards.map(card => (
          <div 
            key={card.id}
            className="relative w-16 h-16 perspective-[1000px] cursor-pointer"
            onClick={() => handleCardClick(card.id)}
          >
            <motion.div
              className="w-full h-full relative preserve-3d"
              animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Front (Hidden) */}
              <div className="absolute w-full h-full bg-zinc-800 rounded-lg backface-hidden flex items-center justify-center hover:bg-zinc-700 border border-white/5">
                <span className="text-2xl opacity-20">?</span>
              </div>
              
              {/* Back (Revealed) */}
              <div 
                className={`absolute w-full h-full rounded-lg backface-hidden flex items-center justify-center text-2xl rotate-y-180 border
                  ${card.isMatched ? 'bg-blue-600/20 border-blue-500/50' : 'bg-zinc-900 border-white/10'}
                `}
              >
                {card.symbol}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="h-8 flex items-center justify-center">
        <AnimatePresence>
          {isWon && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-lg font-bold text-green-400 minecraft-font"
            >
              YOU WON!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemoryGame;
