import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Trophy, Play, RotateCcw } from 'lucide-react';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const INITIAL_SPEED = 150;

type Point = { x: number; y: number };

export const SnakeGame = () => {
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Point>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Point>({ x: 5, y: 5 });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  
  const gameLoopRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  const generateFood = useCallback((currentSnake: Point[]) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // eslint-disable-next-line no-loop-func
      const isOnSnake = currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      if (!isOnSnake) break;
    }
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setFood(generateFood(INITIAL_SNAKE));
    setIsGameOver(false);
    setIsPlaying(true);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Prevent default scrolling for arrow keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

      if (!isPlaying) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    },
    [direction, isPlaying]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const moveSnake = useCallback(() => {
    if (!isPlaying || isGameOver) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const newHead = {
        x: head.x + direction.x,
        y: head.y + direction.y,
      };

      // Check wall collision
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setIsGameOver(true);
        setIsPlaying(false);
        if (score > highScore) setHighScore(score);
        return prevSnake;
      }

      // Check self collision
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setIsGameOver(true);
        setIsPlaying(false);
        if (score > highScore) setHighScore(score);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(s => s + 1);
        setFood(generateFood(newSnake));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, highScore, isGameOver, isPlaying, score, generateFood]);

  useEffect(() => {
    if (isPlaying && !isGameOver) {
      gameLoopRef.current = window.setInterval(moveSnake, INITIAL_SPEED - Math.min(score * 2, 100));
    }
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPlaying, isGameOver, moveSnake, score]);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-6 glassmorphism rounded-3xl" ref={containerRef}>
      
      {/* Game Board */}
      <div className="relative bg-zinc-950 p-2 rounded-xl border-4 border-zinc-800 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4 px-2 font-mono text-blue-400">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span>{score}</span>
          </div>
          <div className="text-sm text-zinc-500">HI: {highScore}</div>
        </div>

        {/* Grid */}
        <div 
          className="relative bg-zinc-900 border border-zinc-800 rounded overflow-hidden"
          style={{
            width: `${GRID_SIZE * 15}px`,
            height: `${GRID_SIZE * 15}px`,
          }}
        >
          {/* Food */}
          <div
            className="absolute bg-red-500 rounded-sm animate-pulse"
            style={{
              width: '15px',
              height: '15px',
              left: `${food.x * 15}px`,
              top: `${food.y * 15}px`,
            }}
          />
          
          {/* Snake */}
          {snake.map((segment, i) => (
            <div
              key={`${segment.x}-${segment.y}-${i}`}
              className={`absolute rounded-sm ${i === 0 ? 'bg-blue-400' : 'bg-blue-600'}`}
              style={{
                width: '15px',
                height: '15px',
                left: `${segment.x * 15}px`,
                top: `${segment.y * 15}px`,
                border: '1px solid rgba(0,0,0,0.2)'
              }}
            />
          ))}

          {/* Overlays */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center flex-col gap-4">
              {isGameOver && <div className="text-red-500 font-bold text-xl minecraft-font mb-2">GAME OVER</div>}
              <button 
                onClick={resetGame}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-transform hover:scale-105 active:scale-95"
              >
                {isGameOver ? <RotateCcw className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {isGameOver ? 'PLAY AGAIN' : 'START GAME'}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="grid grid-cols-3 gap-2 mt-6 md:hidden max-w-[200px] mx-auto">
          <div />
          <button 
            className="bg-zinc-800 p-4 rounded-xl flex items-center justify-center active:bg-blue-600"
            onClick={() => { if(direction.y !== 1) setDirection({x:0, y:-1}) }}
          ><ArrowUp className="w-6 h-6 text-white" /></button>
          <div />
          <button 
            className="bg-zinc-800 p-4 rounded-xl flex items-center justify-center active:bg-blue-600"
            onClick={() => { if(direction.x !== 1) setDirection({x:-1, y:0}) }}
          ><ArrowLeft className="w-6 h-6 text-white" /></button>
          <button 
            className="bg-zinc-800 p-4 rounded-xl flex items-center justify-center active:bg-blue-600"
            onClick={() => { if(direction.y !== -1) setDirection({x:0, y:1}) }}
          ><ArrowDown className="w-6 h-6 text-white" /></button>
          <button 
            className="bg-zinc-800 p-4 rounded-xl flex items-center justify-center active:bg-blue-600"
            onClick={() => { if(direction.x !== -1) setDirection({x:1, y:0}) }}
          ><ArrowRight className="w-6 h-6 text-white" /></button>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
