import { motion } from "framer-motion";

const studios = [
  "5Frame", "Block", "ChillCraft", "Cypress", "DigDown", 
  "Herios", "Kreatik", "Lootbox", "Pixelusion", "RareLoot", 
  "KA Studios", "Vatonage", "Flowscape", "Eternal Creations", "Panascais"
];

// Double the array for seamless marquee
const marqueeStudios = [...studios, ...studios];

const Studios = () => {
  return (
    <section className="py-20 bg-blue-600 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white minecraft-font text-glow">
          Studios I've Worked With
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {marqueeStudios.map((studio, index) => (
            <span 
              key={index} 
              className="mx-8 text-2xl md:text-4xl font-black text-white/80 hover:text-white transition-colors duration-300 uppercase tracking-wider"
            >
              {studio}
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex items-center absolute top-0">
          {marqueeStudios.map((studio, index) => (
            <span 
              key={index} 
              className="mx-8 text-2xl md:text-4xl font-black text-white/80 hover:text-white transition-colors duration-300 uppercase tracking-wider"
            >
              {studio}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studios;
