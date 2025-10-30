interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

const ProjectCard = ({ title, description, image, tags = [] }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-card shadow-apple hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-semibold mb-3 tracking-tight">{title}</h3>
        <p className="text-muted-foreground mb-4 text-balance">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
