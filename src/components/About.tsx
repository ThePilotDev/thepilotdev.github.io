import { motion } from "framer-motion";
import { Terminal, Lightbulb, Gamepad2, GraduationCap } from "lucide-react";

const approaches = [
  {
    icon: <Lightbulb className="w-6 h-6 text-blue-400" />,
    title: "Creative Design",
    description: "Crafting unique, visually appealing worlds and interactive experiences that capture players' imaginations.",
    progress: 95
  },
  {
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    title: "Technical Precision",
    description: "Developing optimized code and efficient structures that ensure smooth, bug-free gameplay experiences.",
    progress: 90
  },
  {
    icon: <Gamepad2 className="w-6 h-6 text-blue-400" />,
    title: "Player-First Mindset",
    description: "Designing with player engagement and immersion as the top priority in every project decision.",
    progress: 92
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
    title: "Constant Evolution",
    description: "Always learning new techniques and staying updated with the latest Minecraft development trends.",
    progress: 88
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white minecraft-font">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10" />
            
            <div className="glassmorphism p-8 rounded-3xl relative overflow-hidden group border border-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
              <p className="text-lg leading-relaxed text-zinc-300 relative z-10">
                Hey there! I'm <strong className="text-white">Jose G. Duarte N</strong>, but most people know me as <strong className="text-blue-400">Pilot</strong>. I'm a passionate Minecraft developer from Venezuela with over <strong className="text-white">5 years of experience</strong> creating amazing content for the Minecraft Bedrock Marketplace. My specialty is bringing ideas to life through custom addons, immersive maps, and dynamic worlds that players love.
              </p>
            </div>
            
            <div className="glassmorphism p-8 rounded-3xl relative overflow-hidden group border-l-4 border-l-blue-500 shadow-2xl">
              <div className="absolute inset-0 bg-zinc-900/50 group-hover:bg-zinc-800/50 transition-colors duration-500" />
              <p className="text-lg leading-relaxed text-zinc-300 relative z-10">
                I've built a strong foundation in both the creative and technical sides of Minecraft development. While I'm fluent in <strong className="text-white">JavaScript and TypeScript</strong> for the Bedrock scripting API, I also have deep experience with Minecraft commands, functions, and the technical artistry that makes projects truly stand out. Version control with Git is second nature to me.
              </p>
            </div>

            <div className="glassmorphism p-8 rounded-3xl relative overflow-hidden group border border-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
              <p className="text-lg leading-relaxed text-zinc-300 relative z-10">
                Beyond just coding, I have a background in technical art and love optimizing assets for the best performance. I've even created custom tools to speed up development workflows. Whether you need a small addon or a complete marketplace world, I bring dedication and flexibility to every project. I'm always excited to take on new challenges and work with creative teams to build something extraordinary!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="w-10 h-1 bg-blue-500 rounded-full" />
              My Development Approach
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {approaches.map((item, index) => (
                <div key={index} className="glassmorphism p-6 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] group">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
