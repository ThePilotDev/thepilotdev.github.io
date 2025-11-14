// Minecraft-themed Tetris game
class TetrisGame {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.gridSize = 20;
    this.cols = 10;
    this.rows = 20;
    this.grid = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
    this.pieces = [
      { shape: [[1,1,1,1]], color: '#55FF55' }, // I (emerald)
      { shape: [[1,1,1],[0,1,0]], color: '#AA00AA' }, // T (amethyst)
      { shape: [[1,1,1],[1,0,0]], color: '#FFAA00' }, // L (gold)
      { shape: [[1,1,1],[0,0,1]], color: '#0000FF' }, // J (lapis)
      { shape: [[1,1],[1,1]], color: '#FFFF00' }, // O (glowstone)
      { shape: [[0,1,1],[1,1,0]], color: '#FF5555' }, // S (redstone)
      { shape: [[1,1,0],[0,1,1]], color: '#55FFFF' }  // Z (diamond)
    ];
    this.currentPiece = this.randomPiece();
    this.nextPiece = this.randomPiece();
    this.gameOver = false;
    this.score = 0;
    this.init();
  }

  init() {
    this.canvas.width = this.cols * this.gridSize;
    this.canvas.height = this.rows * this.gridSize;
    document.addEventListener('keydown', (e) => this.keyHandler(e));
    this.gameLoop = setInterval(() => this.update(), 500);
  }

  randomPiece() {
    const piece = {...this.pieces[Math.floor(Math.random() * this.pieces.length)]};
    piece.x = Math.floor(this.cols / 2) - Math.floor(piece.shape[0].length / 2);
    piece.y = 0;
    return piece;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw grid
    this.ctx.strokeStyle = '#333';
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.ctx.strokeRect(c * this.gridSize, r * this.gridSize, this.gridSize, this.gridSize);
        if (this.grid[r][c]) {
          this.ctx.fillStyle = this.grid[r][c];
          this.ctx.fillRect(c * this.gridSize, r * this.gridSize, this.gridSize, this.gridSize);
          this.drawBlockTexture(c * this.gridSize, r * this.gridSize, this.grid[r][c]);
        }
      }
    }

    // Draw current piece
    this.drawPiece(this.currentPiece);
  }

  drawPiece(piece) {
    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          this.ctx.fillStyle = piece.color;
          this.ctx.fillRect(
            (piece.x + x) * this.gridSize,
            (piece.y + y) * this.gridSize,
            this.gridSize, this.gridSize
          );
          this.drawBlockTexture(
            (piece.x + x) * this.gridSize,
            (piece.y + y) * this.gridSize,
            piece.color
          );
        }
      });
    });
  }

  drawBlockTexture(x, y, color) {
    // Add Minecraft-style block texture
    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(x, y, this.gridSize, this.gridSize);
    
    // Highlight
    this.ctx.strokeStyle = '#FFF';
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + this.gridSize, y);
    this.ctx.lineTo(x + this.gridSize, y + 2);
    this.ctx.lineTo(x + 2, y + 2);
    this.ctx.lineTo(x + 2, y + this.gridSize);
    this.ctx.lineTo(x, y + this.gridSize);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  update() {
    if (this.gameOver) {
      clearInterval(this.gameLoop);
      return;
    }

    if (this.collision(0, 1, this.currentPiece)) {
      this.lockPiece();
      this.clearLines();
      this.currentPiece = this.nextPiece;
      this.nextPiece = this.randomPiece();
      if (this.collision(0, 0, this.currentPiece)) {
        this.gameOver = true;
        alert('Game Over! Score: ' + this.score);
      }
    } else {
      this.currentPiece.y++;
    }
    this.draw();
  }

  collision(offsetX, offsetY, piece) {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (
          piece.shape[y][x] &&
          ((piece.y + y + offsetY >= this.rows) ||
          (piece.x + x + offsetX < 0) ||
          (piece.x + x + offsetX >= this.cols) ||
          (this.grid[piece.y + y + offsetY][piece.x + x + offsetX]))
        ) {
          return true;
        }
      }
    }
    return false;
  }

  lockPiece() {
    this.currentPiece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          this.grid[this.currentPiece.y + y][this.currentPiece.x + x] = this.currentPiece.color;
        }
      });
    });
  }

  clearLines() {
    let linesCleared = 0;
    outer: for (let y = this.rows - 1; y >= 0; y--) {
      for (let x = 0; x < this.cols; x++) {
        if (!this.grid[y][x]) continue outer;
      }
      
      // Remove line
      this.grid.splice(y, 1);
      this.grid.unshift(Array(this.cols).fill(0));
      linesCleared++;
      y++; // Recheck same row
    }
    
    if (linesCleared > 0) {
      this.score += [100, 300, 500, 800][linesCleared - 1];
      this.playClearSound(linesCleared);
    }
  }

  playClearSound(lines) {
    const sounds = [
      'https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3',
      'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3'
    ];
    const audio = new Audio(sounds[lines - 1] || sounds[0]);
    audio.volume = 0.3;
    audio.play();
  }

  keyHandler(e) {
    if (this.gameOver) return;
    
    // Prevent default arrow key behavior (page scrolling)
    if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '].includes(e.key)) {
      e.preventDefault();
    }
    
    switch(e.key) {
      case 'ArrowLeft':
        if (!this.collision(-1, 0, this.currentPiece)) this.currentPiece.x--;
        break;
      case 'ArrowRight':
        if (!this.collision(1, 0, this.currentPiece)) this.currentPiece.x++;
        break;
      case 'ArrowDown':
        if (!this.collision(0, 1, this.currentPiece)) this.currentPiece.y++;
        break;
      case 'ArrowUp':
        this.rotatePiece();
        break;
      case ' ':
        this.hardDrop();
        break;
    }
    this.draw();
  }

  rotatePiece() {
    const rotated = [];
    for (let x = 0; x < this.currentPiece.shape[0].length; x++) {
      const newRow = [];
      for (let y = this.currentPiece.shape.length - 1; y >= 0; y--) {
        newRow.push(this.currentPiece.shape[y][x]);
      }
      rotated.push(newRow);
    }
    
    const originalShape = this.currentPiece.shape;
    this.currentPiece.shape = rotated;
    if (this.collision(0, 0, this.currentPiece)) {
      this.currentPiece.shape = originalShape;
    }
  }

  hardDrop() {
    while (!this.collision(0, 1, this.currentPiece)) {
      this.currentPiece.y++;
    }
    this.update();
  }
}

// Initialize game when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const game = new TetrisGame('tetris-canvas');
});