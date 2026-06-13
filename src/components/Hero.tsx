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
        className="text-[clamp(3rem,10vw,12rem)] text-white text-center font-black leading-none tracking-tighter"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        ThePilot<span className="text-blue-500">Dev</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-[10vh] tracking-[4px] text-sm text-white/50 uppercase"
      >
        Scroll to Explore
      </motion.p>
    </motion.section>
  );
};

export default Hero;
