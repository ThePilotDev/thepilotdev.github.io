import { useAppleScrollZoom } from "@/hooks/useAppleScroll";

const testimonials = [
  {
    quote: "I really appreciate your pricing flexibility and how quickly you deliver quality work. Your communication is exceptional - you make sure we're completely satisfied every step of the way. Having worked with many developers, I can confidently say you're among the very best.",
    author: "Cypress Games",
  },
  {
    quote: "Working with you has been smooth and efficient. Your prices are very reasonable compared to other developers, and despite any language differences, our communication has been excellent. We're really happy with our collaboration!",
    author: "Lootbox Studios",
  },
  {
    quote: "Great work overall! You communicate clearly, provide regular video updates, respond quickly to feedback, and fix issues promptly. Your pricing is fair, and you deliver projects much faster than expected once you start working.",
    author: "Rad Games",
  },
  {
    quote: "It was an absolute pleasure working with you. You're incredibly supportive, easy to collaborate with, and consistently deliver high-quality work. Everything was completed on time, and your prices were excellent. Highly recommended!",
    author: "KA Studios",
  },
  {
    quote: "Working together has been fantastic! Despite the time zone differences, our project progressed smoothly and efficiently. The quality-to-price ratio is outstanding - truly excellent value. I'm definitely looking forward to our next collaboration!",
    author: "Rick-Diamond Studios",
  },
];

const TestimonialCard = ({ quote, author, index }: { quote: string; author: string; index: number }) => {
  const { scale, opacity, elementRef } = useAppleScrollZoom();

  return (
    <div
      ref={elementRef}
      className="mb-16 md:mb-24"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      }}
    >
      <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-apple">
        <div className="mb-6">
          <svg className="w-12 h-12 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
          "{quote}"
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-accent font-bold text-lg">
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 md:py-40 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Client Testimonials
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            What studios say about working with me
          </p>
        </div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
