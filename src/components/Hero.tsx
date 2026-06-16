import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <motion.section 
      id="hero"
      style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        y: heroY,
        opacity: heroOpacity,
        scale: heroScale,
        position: 'relative'
      }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(3rem,10vw,12rem)] text-white text-center font-black leading-none tracking-tighter mb-4"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        ThePilot<span className="text-blue-500">Dev</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-zinc-950/40 backdrop-blur-md"
      >
        <span className="text-xs font-bold tracking-wider text-zinc-400 uppercase">Minecraft Bedrock Specialist</span>
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
        <span className="text-xs font-bold tracking-wider text-blue-400 uppercase flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Desarrollado en TypeScript
        </span>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-[10vh] tracking-[4px] text-sm text-white/50 uppercase"
      >
        Scroll to Explore
      </motion.p>
    </motion.section>
  );
};

export default Hero;
