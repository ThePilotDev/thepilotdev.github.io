import { motion } from "framer-motion";
import { Terminal, FileCode2, Blocks, Paintbrush, Box, Sword, Skull, Map } from "lucide-react";

const skills = [
  { icon: <Terminal className="w-8 h-8" />, name: "Commands", level: "Expert Level" },
  { icon: <FileCode2 className="w-8 h-8" />, name: "JavaScript Scripting", level: "Advanced Level" },
  { icon: <Blocks className="w-8 h-8" />, name: "Behavior Packs", level: "Expert Level" },
  { icon: <Paintbrush className="w-8 h-8" />, name: "Resource Packs", level: "Advanced Level" },
  { icon: <Box className="w-8 h-8" />, name: "3D Items", level: "Intermediate Level" },
  { icon: <Sword className="w-8 h-8" />, name: "Custom Weapons", level: "Advanced Level" },
  { icon: <Skull className="w-8 h-8" />, name: "Custom Mobs", level: "Expert Level" },
  { icon: <Map className="w-8 h-8" />, name: "Adventure Maps", level: "Advanced Level" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950/80 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs px-2">Core Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white minecraft-font drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            My Specialties
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto text-balance font-medium">
            Technical expertise across the entire Minecraft Bedrock development ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glassmorphism p-8 rounded-3xl text-center group hover:bg-zinc-900/80 transition-all duration-300 border border-white/5 hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-inner text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:text-blue-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 border border-white/5">
                {skill.icon}
              </div>
              <h3 className="font-black text-xl text-white mb-2 group-hover:text-blue-400 transition-colors relative z-10">
                {skill.name}
              </h3>
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider relative z-10">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
