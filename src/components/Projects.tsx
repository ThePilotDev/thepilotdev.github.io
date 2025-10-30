import ProjectCard from "./ProjectCard";
import { useAppleScrollZoom } from "@/hooks/useAppleScroll";
import parkourImg from "@/assets/parkour.jpg";
import camelsImg from "@/assets/camels.jpg";
import catExpansionImg from "@/assets/catexpansion.jpg";
import cursedImg from "@/assets/cursed.jpg";
import evolveImg from "@/assets/evolve.jpg";
import extinctImg from "@/assets/extinc_animals.jpg";
import fishImg from "@/assets/fish.jpg";
import mobImg from "@/assets/mob_into.jpg";
import wolfImg from "@/assets/wolf.jpg";
import secretImg from "@/assets/secret.jpg";
import securityImg from "@/assets/security.jpg";
import tntImg from "@/assets/tnt.jpg";

const projects = [
  {
    title: "Parkour and Portals",
    description: "Dynamic parkour challenges featuring portal mechanics for seamless world transitions and exciting gameplay.",
    image: parkourImg,
    tags: ["Parkour", "Portals", "Adventure"],
  },
  {
    title: "More Camels",
    description: "Expanding camel variants with unique abilities and customization options for desert exploration.",
    image: camelsImg,
    tags: ["Mobs", "Transportation", "Desert"],
  },
  {
    title: "Cat Expansion",
    description: "Comprehensive feline add-on featuring new cat breeds, behaviors, and interactive features.",
    image: catExpansionImg,
    tags: ["Mobs", "Pets", "Customization"],
  },
  {
    title: "Cursed World",
    description: "Chaotic dimension filled with bizarre mobs, unpredictable events, and surprising challenges.",
    image: cursedImg,
    tags: ["Dimension", "Challenge", "Mobs"],
  },
  {
    title: "Wither Evolve",
    description: "Progressive boss evolution system with multiple stages and increasingly difficult encounters.",
    image: evolveImg,
    tags: ["Boss", "Combat", "Progression"],
  },
  {
    title: "Extinct Animals",
    description: "Bringing prehistoric creatures back to Minecraft with authentic behaviors and interactions.",
    image: extinctImg,
    tags: ["Mobs", "Nature", "Historical"],
  },
  {
    title: "Enhanced Fishing",
    description: "Extensive fishing overhaul with new fish species, mechanics, and aquatic gameplay.",
    image: fishImg,
    tags: ["Fishing", "Aquatic", "Mechanics"],
  },
  {
    title: "100 Days Morph",
    description: "Transform into different mobs over 100 days with unique abilities and progression system.",
    image: mobImg,
    tags: ["Transformation", "Progression", "Challenge"],
  },
  {
    title: "Wolf Expansion",
    description: "Comprehensive wolf overhaul featuring 24 new wolf variants with unique behaviors and abilities.",
    image: wolfImg,
    tags: ["Mobs", "Pets", "Variants"],
  },
  {
    title: "Secret Doors",
    description: "Innovative redstone mechanics for creating hidden and resizable doors with customizable designs.",
    image: secretImg,
    tags: ["Redstone", "Building", "Mechanics"],
  },
  {
    title: "Security Bunker",
    description: "Advanced security systems with laser defenses and high-tech bunker construction elements.",
    image: securityImg,
    tags: ["Security", "Building", "Defense"],
  },
  {
    title: "TNT Town",
    description: "Explosive gameplay featuring diverse TNT variants with unique blast patterns and effects.",
    image: tntImg,
    tags: ["TNT", "Explosives", "Chaos"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 md:py-40 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore my collection of Minecraft Bedrock add-ons and custom content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCardWithAnimation key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCardWithAnimation = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { scale, opacity, elementRef } = useAppleScrollZoom();

  return (
    <div
      ref={elementRef}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      }}
    >
      <ProjectCard {...project} />
    </div>
  );
};

export default Projects;
