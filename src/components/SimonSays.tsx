import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw } from 'lucide-react';

const COLORS = [
  { id: 0, bg: 'bg-red-500', glow: 'shadow-[0_0_30px_rgba(239,68,68,0.8)]' },
  { id: 1, bg: 'bg-blue-500', glow: 'shadow-[0_0_30px_rgba(59,130,246,0.8)]' },
  { id: 2, bg: 'bg-green-500', glow: 'shadow-[0_0_30px_rgba(34,197,94,0.8)]' },
  { id: 3, bg: 'bg-yellow-400', glow: 'shadow-[0_0_30px_rgba(250,204,21,0.8)]' }
];

export const SimonSays = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [activeColor, setActiveColor] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const playSequence = useCallback(async (seq: number[]) => {
    setIsShowingSequence(true);
    // Wait a bit before starting
    await new Promise(r => setTimeout(r, 800));
    
    for (let i = 0; i < seq.length; i++) {
      setActiveColor(seq[i]);
      await new Promise(r => setTimeout(r, 400));
      setActiveColor(null);
      await new Promise(r => setTimeout(r, 200));
    }
    
    setIsShowingSequence(false);
  }, []);

  const nextRound = useCallback((currentSeq: number[]) => {
    const nextColor = Math.floor(Math.random() * 4);
    const newSeq = [...currentSeq, nextColor];
    setSequence(newSeq);
    setPlayerSequence([]);
    playSequence(newSeq);
  }, [playSequence]);

  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    nextRound([]);
  };

  const handleColorClick = (id: number) => {
    if (!isPlaying || isShowingSequence || gameOver) return;

    // Flash the color briefly
    setActiveColor(id);
    setTimeout(() => setActiveColor(null), 200);

    const newPlayerSeq = [...playerSequence, id];
    setPlayerSequence(newPlayerSeq);

    // Check if wrong
    if (newPlayerSeq[newPlayerSeq.length - 1] !== sequence[newPlayerSeq.length - 1]) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    // Check if completed round
    if (newPlayerSeq.length === sequence.length) {
      setScore(s => s + 1);
      setTimeout(() => nextRound(sequence), 500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 glassmorphism rounded-3xl w-[350px]">
      <div className="flex justify-between items-center w-full mb-6">
        <h3 className="font-bold text-xl minecraft-font text-white">Simon</h3>
        <div className="flex items-center gap-4">
          <span className="text-zinc-400 font-mono text-lg">Score: {score}</span>
        </div>
      </div>

      <div className="relative w-64 h-64 bg-zinc-950 rounded-full p-2 grid grid-cols-2 gap-2 overflow-hidden border-4 border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {COLORS.map(color => (
          <button
            key={color.id}
            onClick={() => handleColorClick(color.id)}
            disabled={!isPlaying || isShowingSequence || gameOver}
            className={`
              w-full h-full opacity-50 transition-all duration-100
              ${color.id === 0 ? 'rounded-tl-full' : ''}
              ${color.id === 1 ? 'rounded-tr-full' : ''}
              ${color.id === 2 ? 'rounded-bl-full' : ''}
              ${color.id === 3 ? 'rounded-br-full' : ''}
              ${color.bg}
              ${activeColor === color.id ? `opacity-100 scale-105 z-10 ${color.glow}` : 'hover:opacity-70'}
            `}
          />
        ))}

        {/* Center circle */}
        <div className="absolute inset-0 m-auto w-24 h-24 bg-zinc-900 rounded-full border-4 border-zinc-800 flex items-center justify-center z-20">
          {!isPlaying && (
            <button onClick={startGame} className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full transition-transform hover:scale-105">
              {gameOver ? <RotateCcw className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
            </button>
          )}
          {isPlaying && (
            <div className="font-bold text-2xl text-white font-mono">
              {isShowingSequence ? '...' : 'GO'}
            </div>
          )}
        </div>
      </div>

      <div className="h-8 mt-6 flex items-center justify-center w-full">
        <AnimatePresence>
          {gameOver && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-lg font-bold text-red-500 minecraft-font text-center"
            >
              GAME OVER
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SimonSays;
