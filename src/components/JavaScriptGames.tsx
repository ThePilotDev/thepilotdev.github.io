import { motion } from "framer-motion";
import SnakeGame from "./SnakeGame";

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
            Take a break and play a quick game of Snake! Built entirely with React Hooks and Framer Motion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <SnakeGame />
        </motion.div>
      </div>
    </section>
  );
};

export default JavaScriptGames;
