import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I really appreciate your pricing flexibility and how quickly you deliver quality work. Your communication is exceptional - you make sure we're completely satisfied every step of the way. Having worked with many developers, I can confidently say you're among the very best.",
    author: "Cypress Games",
    color: "from-emerald-500/20 to-emerald-500/0"
  },
  {
    quote: "Working with you has been smooth and efficient. Your prices are very reasonable compared to other developers, and despite any language differences, our communication has been excellent. We're really happy with our collaboration!",
    author: "Lootbox Studios",
    color: "from-blue-500/20 to-blue-500/0"
  },
  {
    quote: "Great work overall! You communicate clearly, provide regular video updates, respond quickly to feedback, and fix issues promptly. Your pricing is fair, and you deliver projects much faster than expected once you start working.",
    author: "Rad Games",
    color: "from-purple-500/20 to-purple-500/0"
  },
  {
    quote: "It was an absolute pleasure working with you. You're incredibly supportive, easy to collaborate with, and consistently deliver high-quality work. Everything was completed on time, and your prices were excellent. Highly recommended!",
    author: "KA Studios",
    color: "from-pink-500/20 to-pink-500/0"
  },
  {
    quote: "Working together has been fantastic! Despite the time zone differences, our project progressed smoothly and efficiently. The quality-to-price ratio is outstanding - truly excellent value. I'm definitely looking forward to our next collaboration!",
    author: "Rick-Diamond Studios",
    color: "from-amber-500/20 to-amber-500/0"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950/90 -z-10" />
      <div className="absolute -left-[500px] top-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs px-2">Reputation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white minecraft-font drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Client Testimonials
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto text-balance font-medium">
            Hear what studio owners and creators have to say about working with me.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glassmorphism p-8 rounded-3xl relative group border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <Quote className="w-12 h-12 text-zinc-800 absolute top-6 right-6 group-hover:text-blue-500/20 transition-colors duration-500 transform group-hover:rotate-12" />
              
              <p className="text-zinc-300 mb-8 relative z-10 leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-white font-black text-xl border border-white/10 shadow-inner group-hover:border-blue-500/30 transition-colors">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors tracking-tight">{testimonial.author}</h4>
                  <p className="text-sm text-zinc-500 font-semibold uppercase tracking-wider">Partner Studio</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
