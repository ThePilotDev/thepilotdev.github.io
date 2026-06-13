import { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

export const TicTacToe = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  
  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const winInfo = calculateWinner(board);
  const winner = winInfo?.winner;
  const isDraw = !winner && board.every(Boolean);

  const handleClick = (i: number) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 glassmorphism rounded-3xl w-[350px]">
      <div className="flex justify-between items-center w-full mb-6">
        <h3 className="font-bold text-xl minecraft-font text-white">Tic Tac Toe</h3>
        <button onClick={resetGame} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <RotateCcw className="w-5 h-5 text-zinc-400" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 bg-zinc-800 p-2 rounded-xl mb-6">
        {board.map((cell, i) => {
          const isWinningCell = winInfo?.line.includes(i);
          return (
            <button
              key={i}
              className={`w-20 h-20 bg-zinc-950 rounded-lg text-4xl font-bold flex items-center justify-center transition-colors
                ${!cell && !winner ? 'hover:bg-zinc-900' : ''}
                ${isWinningCell ? 'bg-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.5)]' : ''}
              `}
              onClick={() => handleClick(i)}
            >
              {cell && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={cell === 'X' ? 'text-blue-500' : 'text-purple-500'}
                >
                  {cell}
                </motion.span>
              )}
            </button>
          );
        })}
      </div>

      <div className="h-8 flex items-center justify-center w-full">
        {winner ? (
          <div className="text-xl font-bold text-green-400 minecraft-font">Winner: {winner}</div>
        ) : isDraw ? (
          <div className="text-xl font-bold text-yellow-500 minecraft-font">Draw!</div>
        ) : (
          <div className="text-zinc-400 font-medium tracking-widest uppercase text-sm">
            Next player: <span className={xIsNext ? 'text-blue-500 font-bold text-lg' : 'text-purple-500 font-bold text-lg'}>{xIsNext ? 'X' : 'O'}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
