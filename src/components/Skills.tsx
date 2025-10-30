const skills = [
  {
    category: "Development",
    items: ["Behavior Packs", "Resource Packs", "Add-On Creation", "JSON Editing"],
  },
  {
    category: "Scripting",
    items: ["JavaScript", "TypeScript", "GameTest Framework", "Custom Commands"],
  },
  {
    category: "Design",
    items: ["Custom Models", "Texturing", "Animation", "UI/UX Design"],
  },
  {
    category: "Tools",
    items: ["Blockbench", "Bridge", "VS Code", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-40 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Technical capabilities and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="gradient-card rounded-2xl p-6 shadow-apple hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-4 text-accent">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
