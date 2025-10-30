import { useParallax } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const Hero = () => {
  const offsetY = useParallax(0.3);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calcular escala y opacidad basado en scroll
  const heroScale = 1 + scrollProgress * 0.3;
  const heroOpacity = 1 - scrollProgress * 0.7;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-hero px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Elementos flotantes con parallax mejorado */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
        style={{ 
          transform: `translateY(${offsetY * 0.5}px) scale(${1 - scrollProgress * 0.3})`,
          opacity: 1 - scrollProgress * 0.5,
        }}
      />
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-accent/15 rounded-full blur-2xl"
        style={{ 
          transform: `translateY(${-offsetY * 0.7}px) scale(${1 - scrollProgress * 0.2})`,
          opacity: 1 - scrollProgress * 0.4,
        }}
      />
      <div
        className="absolute bottom-40 right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
        style={{ 
          transform: `translateY(${-offsetY * 0.8}px) scale(${1 - scrollProgress * 0.4})`,
          opacity: 1 - scrollProgress * 0.6,
        }}
      />
      <div
        className="absolute bottom-60 left-32 w-28 h-28 bg-accent/8 rounded-full blur-2xl"
        style={{ 
          transform: `translateY(${offsetY * 0.6}px) scale(${1 - scrollProgress * 0.25})`,
          opacity: 1 - scrollProgress * 0.5,
        }}
      />

      <div 
        className="max-w-5xl mx-auto text-center relative z-10"
        style={{
          transform: `scale(${heroScale})`,
          opacity: heroOpacity,
        }}
      >
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-balance mb-8">
            <span 
              className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70"
              style={{
                transform: `translateY(${scrollProgress * -50}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              Minecraft Bedrock
            </span>
            <span 
              className="block bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent/80 to-accent/60 mt-2"
              style={{
                transform: `translateY(${scrollProgress * -30}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              Developer
            </span>
          </h1>
        </div>
        <p
          className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance animate-fade-in font-light"
          style={{ 
            animationDelay: "0.2s",
            transform: `translateY(${scrollProgress * -20}px)`,
            opacity: 1 - scrollProgress * 0.8,
          }}
        >
          Crafting immersive experiences and innovative add-ons for the Minecraft community
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ 
            animationDelay: "0.4s",
            opacity: 1 - scrollProgress,
          }}
        >
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 transition-all duration-300 shadow-apple hover:shadow-xl"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:scale-110 transition-all duration-300 hover:shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
