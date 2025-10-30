import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 md:py-40 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            About Me
          </h2>
        </div>

        <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-apple">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Minecraft Bedrock developer specializing in creating innovative add-ons, 
              custom mobs, and immersive gameplay experiences for the Minecraft community. My journey 
              in development started years ago, and since then, I've been dedicated to pushing the 
              boundaries of what's possible in Minecraft Bedrock Edition.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With extensive experience in behavior packs, resource packs, and advanced scripting using 
              JavaScript and TypeScript, I transform creative ideas into polished, functional content 
              that enhances the Minecraft experience. From custom entity behaviors to complex game 
              mechanics, I love tackling challenging projects that bring unique visions to life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My development philosophy centers on attention to detail, performance optimization, and 
              creating content that feels natural within the Minecraft ecosystem. I believe that great 
              add-ons should be both technically impressive and intuitively designed for players to enjoy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Throughout my career, I've collaborated with various content creators, studios, and fellow 
              developers on projects ranging from small quality-of-life improvements to large-scale 
              content packs. Each project is an opportunity to learn, innovate, and contribute to the 
              vibrant Minecraft community.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding or designing, I stay active in the Minecraft development community, 
              sharing knowledge, exploring new techniques, and keeping up with the latest Bedrock Edition 
              features. I'm always excited to take on new challenges and collaborate on ambitious projects 
              that push creative boundaries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Exp.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Collaborations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
