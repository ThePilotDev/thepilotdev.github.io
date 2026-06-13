import { useEffect, useRef, useState } from "react";

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const generateFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    return newFood;
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Prevenir scroll de la página
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "Enter"].includes(e.key)) {
        e.preventDefault();
      }

      if (!gameStarted) {
        if (e.key === " " || e.key === "Enter") {
          resetGame();
        }
        return;
      }

      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, gameStarted]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(generateFood());
          setScore((s) => s + 10);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameLoop);
  }, [direction, food, gameOver, gameStarted]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = "#654321";
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw food (apple)
    ctx.fillStyle = "#DC143C";
    ctx.fillRect(food.x * CELL_SIZE + 2, food.y * CELL_SIZE + 2, CELL_SIZE - 4, CELL_SIZE - 4);
    ctx.fillStyle = "#228B22";
    ctx.fillRect(food.x * CELL_SIZE + 8, food.y * CELL_SIZE, 4, 4);

    // Draw snake
    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? "#00FF00" : "#32CD32";
      ctx.fillRect(segment.x * CELL_SIZE + 1, segment.y * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
      
      // Snake eyes on head
      if (index === 0) {
        ctx.fillStyle = "#000";
        ctx.fillRect(segment.x * CELL_SIZE + 5, segment.y * CELL_SIZE + 5, 3, 3);
        ctx.fillRect(segment.x * CELL_SIZE + 12, segment.y * CELL_SIZE + 5, 3, 3);
      }
    });
  }, [snake, food]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-between w-full max-w-md">
        <div className="text-2xl font-bold minecraft-font">Score: {score}</div>
        {gameOver && (
          <button
            onClick={resetGame}
            className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Restart
          </button>
        )}
      </div>
      <div className="relative" onClick={() => !gameStarted && resetGame()}>
        <canvas
          ref={canvasRef}
          width={GRID_SIZE * CELL_SIZE}
          height={GRID_SIZE * CELL_SIZE}
          className="border-4 border-primary rounded-lg shadow-xl cursor-pointer"
        />
        {!gameStarted && (
          <div 
            className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={resetGame}
          >
            <div className="text-center text-white pointer-events-none">
              <p className="text-2xl font-bold mb-4">Minecraft Snake</p>
              <p className="text-sm mb-2">Use Arrow Keys to move</p>
              <p className="text-xs opacity-70">Click here or press SPACE to start</p>
            </div>
          </div>
        )}
        {gameOver && (
          <div 
            className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={resetGame}
          >
            <div className="text-center text-white pointer-events-none">
              <p className="text-3xl font-bold mb-2">Game Over!</p>
              <p className="text-xl">Final Score: {score}</p>
              <p className="text-sm mt-2 opacity-70">Click to restart</p>
            </div>
          </div>
        )}
      </div>
      <p className="text-sm text-muted-foreground">Built with JavaScript & Canvas API</p>
    </div>
  );
};

export default SnakeGame;
