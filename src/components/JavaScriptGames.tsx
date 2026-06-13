import { motion } from "framer-motion";
import SnakeGame from "./SnakeGame";
import MemoryGame from "./MemoryGame";
import TicTacToe from "./TicTacToe";
import SimonSays from "./SimonSays";

const JavaScriptGames = () => {
  return (
    <section id="games" className="py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950/80 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance text-white minecraft-font">
            Mini Games
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto text-balance">
            Take a break and play some classic arcade games. All built entirely with React and Framer Motion!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-12 justify-items-center"
        >
          <div className="flex flex-col items-center gap-4">
            <SnakeGame />
          </div>
          <div className="flex flex-col items-center gap-4 mt-8 xl:mt-0">
            <MemoryGame />
          </div>
          <div className="flex flex-col items-center gap-4">
            <SimonSays />
          </div>
          <div className="flex flex-col items-center gap-4">
            <TicTacToe />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JavaScriptGames;
