import { useEffect, useState, useRef } from "react";

// Hook para animaciones estilo Apple iPhone - zoom in/out con scroll
export const useAppleScrollZoom = () => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcular progreso del scroll
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const maxDistance = windowHeight;
      
      // Cuando el elemento está en el centro = escala máxima (1.2)
      // Cuando está arriba o abajo = escala mínima (0.8)
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
      const newScale = 1.2 - (normalizedDistance * 0.4); // Entre 0.8 y 1.2
      
      // Opacity basada en proximidad al viewport
      const newOpacity = Math.max(0, Math.min(1, 1 - (distanceFromCenter / windowHeight)));

      setScale(newScale);
      setOpacity(newOpacity);
    };

    handleScroll(); // Inicial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scale, opacity, elementRef };
};

// Hook para texto que aparece gradualmente
export const useTextReveal = () => {
  const [progress, setProgress] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcular cuando el elemento entra en viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setProgress(Math.max(0, Math.min(1, scrollProgress)));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { progress, elementRef };
};
