import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Studios from "@/components/Studios";
import Testimonials from "@/components/Testimonials";
import JavaScriptGames from "@/components/JavaScriptGames";
import Contact from "@/components/Contact";

const Index = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#030304] text-[#F0EDE6] font-sans selection:bg-blue-500/30">
      
      {/* Noise Background */}
      <div 
        className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      />
      
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-5 h-5 bg-blue-500 rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      <Navigation />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Studios />
        <Testimonials />
        <JavaScriptGames />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
