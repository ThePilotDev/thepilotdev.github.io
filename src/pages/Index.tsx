import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Studios from "@/components/Studios";
import JavaScriptGames from "@/components/JavaScriptGames";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Studios />
      <JavaScriptGames />
      <Testimonials />
      <Pricing />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
