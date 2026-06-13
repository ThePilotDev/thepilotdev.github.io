// Snake Game JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('snake-canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  canvas.width = 400;
  canvas.height = 400;
  
  // Game variables
  const box = 20;
  let snake = [{x: 9 * box, y: 10 * box}];
  let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
  };
  let d;
  let score = 0;
  let game;
  
  // Control the snake
  document.addEventListener('keydown', (event) => {
    // Prevent default arrow key behavior (page scrolling)
    if([37, 38, 39, 40].includes(event.keyCode)) {
      event.preventDefault();
    }
    
    if(event.keyCode == 37 && d != "RIGHT") d = "LEFT";
    else if(event.keyCode == 38 && d != "DOWN") d = "UP";
    else if(event.keyCode == 39 && d != "LEFT") d = "RIGHT";
    else if(event.keyCode == 40 && d != "UP") d = "DOWN";
  });

  function drawGame() {
    // Clear canvas
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake
    for(let i = 0; i < snake.length; i++) {
      ctx.fillStyle = i == 0 ? "#4CAF50" : "#8BC34A";
      ctx.fillRect(snake[i].x, snake[i].y, box, box);
      ctx.strokeStyle = "#000";
      ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    
    // Draw food
    ctx.fillStyle = "#F44336";
    ctx.fillRect(food.x, food.y, box, box);
    
    // Score
    ctx.fillStyle = "white";
    ctx.font = "20px 'Press Start 2P'";
    ctx.fillText("Score: " + score, 10, 30);
  }

  function gameLoop() {
    // Snake movement
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    if(d == "LEFT") snakeX -= box;
    if(d == "UP") snakeY -= box;
    if(d == "RIGHT") snakeX += box;
    if(d == "DOWN") snakeY += box;
    
    // Check collision with food
    if(snakeX == food.x && snakeY == food.y) {
      score++;
      food = {
        x: Math.floor(Math.random() * 20) * box,
        y: Math.floor(Math.random() * 20) * box
      };
    } else {
      snake.pop();
    }
    
    // Add new head
    let newHead = {x: snakeX, y: snakeY};
    
    // Game over conditions
    if(snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height 
       || collision(newHead, snake)) {
      clearInterval(game);
      alert("Game Over! Score: " + score);
    }
    
    snake.unshift(newHead);
    
    drawGame();
  }

  function collision(head, array) {
    for(let i = 0; i < array.length; i++) {
      if(head.x == array[i].x && head.y == array[i].y) {
        return true;
      }
    }
    return false;
  }

  // Start game
  game = setInterval(gameLoop, 100);
});