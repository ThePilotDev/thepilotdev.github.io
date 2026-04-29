import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const CardContent = (
    <motion.div 
      variants={item}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl overflow-hidden glassmorphism border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] bg-zinc-950/50 h-full"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="aspect-[16/10] overflow-hidden relative m-2 rounded-2xl">
        <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500 z-20" />
      </div>
      ////my name is luis
      <div className="relative z-30 p-6 pt-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-black mb-2 text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
          {project.description}
        </p>
      </div>
    </motion.div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default ProjectCard;
