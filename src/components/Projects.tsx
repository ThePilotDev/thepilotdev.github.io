import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const allProjects = [
  {
    title: "RPG Villager Add-On",
    desc: "A massive overhaul of village life and trading mechanics, created in collaboration with @RPG_Villager.",
    img: "/assets/RPG_Villagerr_Thumbnail_0.jpg",
    badge: "RPG",
    link: "https://x.com/RPG_Villager"
  },
  {
    title: "Defeat The Boss",
    desc: "Epic boss fight mechanics and intense combat scenarios for ultimate survival challenges.",
    img: "/assets/defeattheboss.jpg",
    badge: "COMBAT",
    link: "https://www.minecraft.net/es-es/marketplace/pdp/chillcraft/defeat-the-boss/111d4270-b767-4159-9391-66f11439ae14"
  },
  {
    num: "02",
    title: "44 Ways To Prank",
    desc: "Hilarious traps, clever pranks, and unexpected tricks to troll your friends in multiplayer.",
    img: "/assets/trolladdon.jpg",
    badge: "MULTIPLAYER",
    link: "https://www.minecraft.net/es-es/marketplace/pdp/ka-studios/44-ways-to-prank-add--on/244e7477-a58f-4df7-b5df-59de6a507d2b"
  },
  {
    num: "03",
    title: "Tools Evolve",
    desc: "Upgradeable tools that level up with use, granting new abilities and significantly better stats.",
    img: "/assets/toolsevolve.jpg",
    badge: "PROGRESSION",
    link: "https://www.minecraft.net/es-es/marketplace/pdp/cypress-games/tools-evolve/0f9e2e80-f796-4083-8e85-1b2760af4176"
  },
  {
    num: "04",
    title: "Ore Detector",
    desc: "Advanced scanning technology to easily locate valuable resources and rare ores underground.",
    img: "/assets/oredetector.jpg",
    badge: "UTILITY",
    link: "https://www.minecraft.net/es-es/marketplace/pdp/cypress-games/ore-detectors++/eb46793e-d7db-4615-8dd4-cdce1ef27951"
  },
  {
    num: "05",
    title: "Parkour and Portals",
    desc: "Dynamic parkour challenges featuring portal mechanics for seamless world transitions and exciting gameplay.",
    img: "/assets/parkour.jpg",
    badge: "ADVENTURE"
  },
  {
    num: "06",
    title: "More Camels",
    desc: "Expanding camel variants with unique abilities and customization options for desert exploration.",
    img: "/assets/camels.jpg",
    badge: "MOBS"
  },
  {
    num: "07",
    title: "Cat Expansion",
    desc: "Comprehensive feline add-on featuring new cat breeds, behaviors, and interactive features.",
    img: "/assets/catexpansion.jpg",
    badge: "PETS"
  },
  {
    num: "08",
    title: "Cursed World",
    desc: "Chaotic dimension filled with bizarre mobs, unpredictable events, and surprising challenges.",
    img: "/assets/cursed.jpg",
    badge: "DIMENSION"
  },
  {
    num: "09",
    title: "Wither Evolve",
    desc: "Progressive boss evolution system with multiple stages and increasingly difficult encounters.",
    img: "/assets/evolve.jpg",
    badge: "BOSS"
  },
  {
    num: "10",
    title: "Extinct Animals",
    desc: "Bringing prehistoric creatures back to Minecraft with authentic behaviors and interactions.",
    img: "/assets/extinc_animals.jpg",
    badge: "HISTORICAL"
  },
  {
    num: "11",
    title: "Enhanced Fishing",
    desc: "Extensive fishing overhaul with new fish species, mechanics, and aquatic gameplay.",
    img: "/assets/fish.jpg",
    badge: "AQUATIC"
  },
  {
    num: "12",
    title: "100 Days Morph",
    desc: "Transform into different mobs over 100 days with unique abilities and progression system.",
    img: "/assets/mob_into.jpg",
    badge: "TRANSFORMATION"
  },
  {
    num: "13",
    title: "Wolf Expansion",
    desc: "Comprehensive wolf overhaul featuring 24 new wolf variants with unique behaviors and abilities.",
    img: "/assets/wolf.jpg",
    badge: "VARIANTS"
  },
  {
    num: "14",
    title: "Secret Doors",
    desc: "Innovative redstone mechanics for creating hidden and resizable doors with customizable designs.",
    img: "/assets/secret.jpg",
    badge: "REDSTONE"
  },
  {
    num: "15",
    title: "Security Bunker",
    desc: "Advanced security systems with laser defenses and high-tech bunker construction elements.",
    img: "/assets/security.jpg",
    badge: "DEFENSE"
  },
  {
    num: "16",
    title: "TNT Town",
    desc: "Explosive gameplay featuring diverse TNT variants with unique blast patterns and effects.",
    img: "/assets/tnt.jpg",
    badge: "EXPLOSIVES"
  }
];

const Projects = () => {
  const horizontalRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, mass: 0.5, stiffness: 100 });
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-92.5%"]);

  return (
    <section ref={horizontalRef} className="relative h-[1275vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-[100px] px-[10vw] items-center">
          
          {/* Intro text */}
          <div className="w-[40vw] shrink-0 pr-[10vw]">
            <h2 className="text-[clamp(2rem,5vw,5rem)] font-black leading-[1.1] tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
              Pushing the<br/>boundaries<br/>of Bedrock.
            </h2>
            <p className="mt-10 text-xl text-white/60 leading-relaxed max-w-[400px]">
              Every project is an exploration. A journey into what's possible when technical mastery meets unbridled creativity.
            </p>
          </div>

          {/* Project Cards */}
          {allProjects.map((proj, i) => (
            <div key={i} className="relative w-[70vw] max-w-[900px] h-[70vh] rounded-[20px] overflow-hidden shrink-0 flex items-end p-[60px] group">
              <div className="absolute top-[-40px] right-0 text-[8rem] font-black text-white/5 pointer-events-none" style={{ fontFamily: "'Syne', sans-serif" }}>
                {(i + 1).toString().padStart(2, '0')}
              </div>
              
              {/* Image Background */}
              <img 
                src={proj.img} 
                alt={proj.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ 
                  filter: proj.blur ? 'blur(15px) brightness(0.6)' : 'none',
                  transform: proj.blur ? 'scale(1.1)' : 'none'
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030304]/90 to-transparent pointer-events-none" />
              
              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="inline-block px-4 py-2 border border-white/20 rounded-full text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
                  {proj.badge}
                </div>
                <h3 className="text-5xl font-bold mb-4 tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>{proj.title}</h3>
                <p className="text-lg text-white/70 max-w-[500px]">{proj.desc}</p>
                
                {!proj.blur && proj.link && (
                  <motion.a 
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 10 }}
                    className="inline-block mt-8 text-blue-500 font-semibold tracking-widest text-sm uppercase"
                  >
                    EXPLORE PROJECT →
                  </motion.a>
                )}
              </div>
            </div>
          ))}
          
          {/* Outro text */}
          <div className="w-[30vw] shrink-0 pl-[5vw]">
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-black leading-tight tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
              More on<br/>the horizon.
            </h2>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
