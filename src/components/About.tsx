import { motion } from "framer-motion";
import { Terminal, Lightbulb, Gamepad2, Layers } from "lucide-react";

const approaches = [
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
    title: "Creative Design",
    desc: "Crafting unique, visually appealing worlds and interactive experiences that capture players' imaginations."
  },
  {
    icon: <Terminal className="w-8 h-8 text-blue-500" />,
    title: "Technical Precision",
    desc: "Developing optimized code and efficient structures that ensure smooth, bug-free gameplay experiences."
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-blue-500" />,
    title: "Player-First",
    desc: "Designing with player engagement and immersion as the top priority in every project decision."
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-500" />,
    title: "Full-Stack Bedrock",
    desc: "Expertise ranging from TS/JS API scripting to technical art, optimizing assets for peak performance."
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 px-[5vw] relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column - Typography Focus */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-2 px-4 border border-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-8 text-white/50">
              Who I Am
            </span>
            <h2 className="text-[clamp(2.5rem,4vw,4.5rem)] font-black leading-[1.1] tracking-tighter mb-8" style={{ fontFamily: "'Syne', sans-serif" }}>
              I craft experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">players</span> never want to leave.
            </h2>
            
            <div className="space-y-6 text-xl text-white/60 leading-relaxed font-light">
              <p>
                Hey there! I'm <strong className="text-white font-medium">Jose G. Duarte N</strong>, known in the community as <strong className="text-blue-400 font-medium">Pilot</strong>. I'm a dedicated Minecraft developer from Venezuela with over <strong className="text-white font-medium">5 years of experience</strong> bringing ambitious ideas to life on the Bedrock Marketplace.
              </p>
              <p>
                My foundation is built on both the creative and technical pillars of Minecraft. From deep-level <strong className="text-white font-medium">JavaScript and TypeScript</strong> API scripting to complex commands and performance optimization, I treat every addon as a full-scale software project.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Approaches Grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:mt-24">
            {approaches.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-[24px] bg-[#0A0A0C] border border-white/5 hover:border-blue-500/30 transition-colors group relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-[16px] bg-[#111115] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-white/50 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
