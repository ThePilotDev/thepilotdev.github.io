import { useEffect, useRef, useState } from "react";

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const PADDLE_WIDTH = 80;
const PADDLE_HEIGHT = 15;
const BALL_RADIUS = 8;
const BRICK_WIDTH = 50;
const BRICK_HEIGHT = 20;
const BRICK_PADDING = 5;
const BRICK_OFFSET_TOP = 30;
const BRICK_OFFSET_LEFT = 0;

interface Brick {
  x: number;
  y: number;
  visible: boolean;
  color: string;
}

const BreakoutGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const gameStateRef = useRef({
    paddle: { x: CANVAS_WIDTH / 2 - PADDLE_WIDTH / 2, y: CANVAS_HEIGHT - 30 },
    ball: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 50, dx: 3, dy: -3 },
    bricks: [] as Brick[],
    rightPressed: false,
    leftPressed: false,
  });

  const initBricks = () => {
    const bricks: Brick[] = [];
    const colors = ["#00FF00", "#DC143C", "#FFD700", "#8B4513", "#808080", "#4169E1"];
    const rows = 6;
    const cols = 7;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        bricks.push({
          x: col * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT + 12,
          y: row * (BRICK_HEIGHT + BRICK_PADDING) + BRICK_OFFSET_TOP,
          visible: true,
          color: colors[row],
        });
      }
    }
    return bricks;
  };

  const resetGame = () => {
    gameStateRef.current = {
      paddle: { x: CANVAS_WIDTH / 2 - PADDLE_WIDTH / 2, y: CANVAS_HEIGHT - 30 },
      ball: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 50, dx: 3, dy: -3 },
      bricks: initBricks(),
      rightPressed: false,
      leftPressed: false,
    };
    setScore(0);
    setGameOver(false);
    setGameWon(false);
    setGameStarted(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevenir scroll de la página
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "Enter", "a", "d", "A", "D"].includes(e.key)) {
        e.preventDefault();
      }

      if (!gameStarted && (e.key === " " || e.key === "Enter")) {
        resetGame();
        return;
      }

      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        gameStateRef.current.rightPressed = true;
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        gameStateRef.current.leftPressed = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        gameStateRef.current.rightPressed = false;
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        gameStateRef.current.leftPressed = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameStarted]);

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gameLoop = () => {
      const state = gameStateRef.current;

      // Clear canvas
      ctx.fillStyle = "#228B22";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Draw bricks
      state.bricks.forEach((brick) => {
        if (brick.visible) {
          ctx.fillStyle = brick.color;
          ctx.fillRect(brick.x, brick.y, BRICK_WIDTH, BRICK_HEIGHT);
          ctx.strokeStyle = "#000";
          ctx.lineWidth = 2;
          ctx.strokeRect(brick.x, brick.y, BRICK_WIDTH, BRICK_HEIGHT);
        }
      });

      // Draw paddle (obsidian)
      ctx.fillStyle = "#1a0033";
      ctx.fillRect(state.paddle.x, state.paddle.y, PADDLE_WIDTH, PADDLE_HEIGHT);
      ctx.fillStyle = "#4B0082";
      ctx.fillRect(state.paddle.x + 2, state.paddle.y + 2, PADDLE_WIDTH - 4, PADDLE_HEIGHT - 4);

      // Draw ball
      ctx.beginPath();
      ctx.arc(state.ball.x, state.ball.y, BALL_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = "#FFD700";
      ctx.fill();
      ctx.strokeStyle = "#FF8C00";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();

      // Move paddle
      if (state.rightPressed && state.paddle.x < CANVAS_WIDTH - PADDLE_WIDTH) {
        state.paddle.x += 6;
      }
      if (state.leftPressed && state.paddle.x > 0) {
        state.paddle.x -= 6;
      }

      // Move ball
      state.ball.x += state.ball.dx;
      state.ball.y += state.ball.dy;

      // Ball collision with walls
      if (state.ball.x + BALL_RADIUS > CANVAS_WIDTH || state.ball.x - BALL_RADIUS < 0) {
        state.ball.dx = -state.ball.dx;
      }
      if (state.ball.y - BALL_RADIUS < 0) {
        state.ball.dy = -state.ball.dy;
      }

      // Ball collision with paddle
      if (
        state.ball.y + BALL_RADIUS > state.paddle.y &&
        state.ball.x > state.paddle.x &&
        state.ball.x < state.paddle.x + PADDLE_WIDTH
      ) {
        state.ball.dy = -state.ball.dy;
      }

      // Ball collision with bricks
      state.bricks.forEach((brick) => {
        if (brick.visible) {
          if (
            state.ball.x > brick.x &&
            state.ball.x < brick.x + BRICK_WIDTH &&
            state.ball.y > brick.y &&
            state.ball.y < brick.y + BRICK_HEIGHT
          ) {
            state.ball.dy = -state.ball.dy;
            brick.visible = false;
            setScore((s) => s + 10);
          }
        }
      });

      // Check win
      if (state.bricks.every((brick) => !brick.visible)) {
        setGameWon(true);
        return;
      }

      // Check game over
      if (state.ball.y + BALL_RADIUS > CANVAS_HEIGHT) {
        setGameOver(true);
        return;
      }

      requestAnimationFrame(gameLoop);
    };

    const animationId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationId);
  }, [gameStarted, gameOver, gameWon]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-between w-full max-w-md">
        <div className="text-2xl font-bold minecraft-font">Score: {score}</div>
        {(gameOver || gameWon) && (
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
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="border-4 border-primary rounded-lg shadow-xl cursor-pointer"
        />
        {!gameStarted && (
          <div 
            className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={resetGame}
          >
            <div className="text-center text-white pointer-events-none">
              <p className="text-2xl font-bold mb-4">Block Breaker</p>
              <p className="text-sm mb-2">Use Arrow Keys or A/D to move</p>
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
        {gameWon && (
          <div 
            className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-lg cursor-pointer"
            onClick={resetGame}
          >
            <div className="text-center text-white pointer-events-none">
              <p className="text-3xl font-bold mb-2">You Won! 🎉</p>
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

export default BreakoutGame;
