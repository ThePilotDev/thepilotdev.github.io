import { motion } from 'framer-motion';
import { ArrowDown, Code, Gamepad2, Sparkles } from 'lucide-react';

const FloatingCube = ({ delay, duration, x, y, scale }: { delay: number, duration: number, x: string, y: string, scale: number }) => (
  <motion.div
    className="absolute hidden md:block rounded-xl border border-white/10 glassmorphism"
    style={{ left: x, top: y, width: 60 * scale, height: 60 * scale }}
    animate={{
      y: [0, -30, 0],
      rotateX: [0, 180, 360],
      rotateY: [0, 180, 360],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-zinc-950 -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15)_0%,transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.15)_0%,transparent_30%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.15)_0%,transparent_30%)] -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10" />

      {/* Floating 3D Cubes */}
      <div className="absolute inset-0 -z-10 overflow-hidden perspective-[1000px]">
        <FloatingCube delay={0} duration={15} x="15%" y="20%" scale={1.5} />
        <FloatingCube delay={2} duration={18} x="85%" y="30%" scale={1} />
        <FloatingCube delay={5} duration={20} x="75%" y="70%" scale={2} />
        <FloatingCube delay={1} duration={16} x="20%" y="80%" scale={0.8} />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8 hover:bg-blue-500/20 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Available for new projects</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
          className="relative"
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-4 text-white minecraft-font leading-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            ThePilotDev
          </h1>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 text-blue-500/50 blur-[2px]"
          >
            <Sparkles className="w-20 h-20" />
          </motion.div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-zinc-300 max-w-3xl mx-auto mb-12 font-medium text-balance leading-relaxed"
        >
          Minecraft Bedrock Specialist crafting extraordinary <span className="text-blue-400">digital adventures</span>, addons, and immersive worlds.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)]">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]" />
            <Gamepad2 className="w-6 h-6 relative z-10" />
            <span className="relative z-10">View My Work</span>
          </button>
          
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="group inline-flex items-center justify-center gap-3 px-8 py-4 glassmorphism text-white rounded-2xl font-bold text-lg transition-all hover:bg-zinc-800/50 hover:border-zinc-600 hover:scale-105 active:scale-95">
            <Code className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />
            <span>Start a Project</span>
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce text-blue-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
