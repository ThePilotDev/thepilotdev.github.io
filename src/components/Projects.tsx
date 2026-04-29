import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Defeat The Boss",
    description: "Epic boss fight mechanics and intense combat scenarios for ultimate survival challenges.",
    image: "/assets/defeattheboss.jpg",
    tags: ["Boss", "Combat", "Challenge"],
    link: "https://www.minecraft.net/es-es/marketplace/pdp/chillcraft/defeat-the-boss/111d4270-b767-4159-9391-66f11439ae14"
  },
  {
    title: "44 Ways To Prank Add-On",
    description: "Hilarious traps, clever pranks, and unexpected tricks to troll your friends in multiplayer.",
    image: "/assets/trolladdon.jpg",
    tags: ["Pranks", "Multiplayer", "Fun"],
    link: "https://www.minecraft.net/es-es/marketplace/pdp/ka-studios/44-ways-to-prank-add--on/244e7477-a58f-4df7-b5df-59de6a507d2b"
  },
  {
    title: "Tools Evolve",
    description: "Upgradeable tools that level up with use, granting new abilities and significantly better stats.",
    image: "/assets/toolsevolve.jpg",
    tags: ["Tools", "Progression", "Utility"],
    link: "https://www.minecraft.net/es-es/marketplace/pdp/cypress-games/tools-evolve/0f9e2e80-f796-4083-8e85-1b2760af4176"
  },
  {
    title: "Ore Detector",
    description: "Advanced scanning technology to easily locate valuable resources and rare ores underground.",
    image: "/assets/oredetector.jpg",
    tags: ["Utility", "Mining", "Tech"],
    link: "https://www.minecraft.net/es-es/marketplace/pdp/cypress-games/ore-detectors++/eb46793e-d7db-4615-8dd4-cdce1ef27951"
  },
  {
    title: "Parkour and Portals",
    description: "Dynamic parkour challenges featuring portal mechanics for seamless world transitions and exciting gameplay.",
    image: "/assets/parkour.jpg",
    tags: ["Parkour", "Portals", "Adventure"],
  },
  {
    title: "More Camels",
    description: "Expanding camel variants with unique abilities and customization options for desert exploration.",
    image: "/assets/camels.jpg",
    tags: ["Mobs", "Transportation", "Desert"],
  },
  {
    title: "Cat Expansion",
    description: "Comprehensive feline add-on featuring new cat breeds, behaviors, and interactive features.",
    image: "/assets/catexpansion.jpg",
    tags: ["Mobs", "Pets", "Customization"],
  },
  {
    title: "Cursed World",
    description: "Chaotic dimension filled with bizarre mobs, unpredictable events, and surprising challenges.",
    image: "/assets/cursed.jpg",
    tags: ["Dimension", "Challenge", "Mobs"],
  },
  {
    title: "Wither Evolve",
    description: "Progressive boss evolution system with multiple stages and increasingly difficult encounters.",
    image: "/assets/evolve.jpg",
    tags: ["Boss", "Combat", "Progression"],
  },
  {
    title: "Extinct Animals",
    description: "Bringing prehistoric creatures back to Minecraft with authentic behaviors and interactions.",
    image: "/assets/extinc_animals.jpg",
    tags: ["Mobs", "Nature", "Historical"],
  },
  {
    title: "Enhanced Fishing",
    description: "Extensive fishing overhaul with new fish species, mechanics, and aquatic gameplay.",
    image: "/assets/fish.jpg",
    tags: ["Fishing", "Aquatic", "Mechanics"],
  },
  {
    title: "100 Days Morph",
    description: "Transform into different mobs over 100 days with unique abilities and progression system.",
    image: "/assets/mob_into.jpg",
    tags: ["Transformation", "Progression", "Challenge"],
  },
  {
    title: "Wolf Expansion",
    description: "Comprehensive wolf overhaul featuring 24 new wolf variants with unique behaviors and abilities.",
    image: "/assets/wolf.jpg",
    tags: ["Mobs", "Pets", "Variants"],
  },
  {
    title: "Secret Doors",
    description: "Innovative redstone mechanics for creating hidden and resizable doors with customizable designs.",
    image: "/assets/secret.jpg",
    tags: ["Redstone", "Building", "Mechanics"],
  },
  {
    title: "Security Bunker",
    description: "Advanced security systems with laser defenses and high-tech bunker construction elements.",
    image: "/assets/security.jpg",
    tags: ["Security", "Building", "Defense"],
  },
  {
    title: "TNT Town",
    description: "Explosive gameplay featuring diverse TNT variants with unique blast patterns and effects.",
    image: "/assets/tnt.jpg",
    tags: ["TNT", "Explosives", "Chaos"],
  },
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

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-zinc-950/50 -z-10" />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance minecraft-font text-white">
            Featured Add-Ons
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto text-balance">
            Explore my collection of top-rated Minecraft Bedrock Marketplace projects.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
