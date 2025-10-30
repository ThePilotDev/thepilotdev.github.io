import SnakeGame from "./games/SnakeGame";
import BreakoutGame from "./games/BreakoutGame";
import { useAppleScrollZoom } from "@/hooks/useAppleScroll";

const JavaScriptGames = () => {
  const { scale: scale1, opacity: opacity1, elementRef: ref1 } = useAppleScrollZoom();
  const { scale: scale2, opacity: opacity2, elementRef: ref2 } = useAppleScrollZoom();

  return (
    <section className="py-32 md:py-40 px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            JavaScript Games
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Interactive games built from scratch with vanilla JavaScript
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div
            ref={ref1}
            style={{
              transform: `scale(${scale1})`,
              opacity: opacity1,
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
          >
            <div className="gradient-card rounded-3xl p-8 shadow-apple">
              <h3 className="text-3xl font-bold mb-6 text-center">Minecraft Snake</h3>
              <SnakeGame />
            </div>
          </div>

          <div
            ref={ref2}
            style={{
              transform: `scale(${scale2})`,
              opacity: opacity2,
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
          >
            <div className="gradient-card rounded-3xl p-8 shadow-apple">
              <h3 className="text-3xl font-bold mb-6 text-center">Block Breaker</h3>
              <BreakoutGame />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These fully functional games demonstrate advanced JavaScript skills including canvas manipulation,
            game loop architecture, collision detection, and event handling - all built without frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JavaScriptGames;
