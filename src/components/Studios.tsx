import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import pixelusionImg from "@/assets/studios/pixelusion.jpg";
import rarelootImg from "@/assets/studios/rareloot.jpg";
import fiveframeImg from "@/assets/studios/5frame.jpg";
import blockImg from "@/assets/studios/block.png";
import cypressImg from "@/assets/studios/cypress.jpg";
import digdownImg from "@/assets/studios/digdown.jpg";
import heriosImg from "@/assets/studios/herios.jpg";
import kaStudiosImg from "@/assets/studios/ka_studios.jpg";
import kreatikImg from "@/assets/studios/kreatik.png";
import lootboxImg from "@/assets/studios/lootbox.jpg";

const studios = [
  { name: "Pixelusion", logo: pixelusionImg },
  { name: "Rare Loot", logo: rarelootImg },
  { name: "5Frame", logo: fiveframeImg },
  { name: "Block", logo: blockImg },
  { name: "Cypress", logo: cypressImg },
  { name: "Dig Down", logo: digdownImg },
  { name: "Herios", logo: heriosImg },
  { name: "KA Studios", logo: kaStudiosImg },
  { name: "Kreatik", logo: kreatikImg },
  { name: "Lootbox", logo: lootboxImg },
];

const Studios = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 md:py-40 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Collaborating with top studios to deliver exceptional Minecraft experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {studios.map((studio, index) => (
            <div
              key={index}
              className={`flex items-center justify-center transition-all duration-700 delay-${index * 100}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="group relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-6 shadow-apple hover:shadow-xl transition-all duration-500 hover:scale-110 border border-border/50">
                  <img
                    src={studio.logo}
                    alt={studio.name}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studios;
