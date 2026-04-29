import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Studios from "@/components/Studios";
import Testimonials from "@/components/Testimonials";
import JavaScriptGames from "@/components/JavaScriptGames";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-blue-500/30">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Studios />
        <Testimonials />
        <JavaScriptGames />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
