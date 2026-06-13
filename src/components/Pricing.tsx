import { motion } from "framer-motion";
import { Clock, Briefcase, Zap, Shield, Crown } from "lucide-react";

const pricingTiers = [
  {
    title: "Small Projects",
    price: "$300 - $500",
    description: "Perfect for simple addons, small maps, or minor modifications to existing content.",
    icon: <Briefcase className="w-6 h-6 text-blue-400" />,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Medium Projects",
    price: "$500 - $1000",
    description: "Ideal for custom mobs, unique weapons, or medium-sized adventure maps with custom mechanics.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500 to-blue-700",
    popular: true
  },
  {
    title: "Advanced Projects",
    price: "$1000 - $2000",
    description: "Complex systems, custom UIs, or comprehensive behavior packs with advanced features.",
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Large Projects",
    price: "$2000 - $5000+",
    description: "Complete marketplace worlds, extensive modpacks, or long-term collaborative projects.",
    icon: <Crown className="w-6 h-6 text-blue-400" />,
    color: "from-blue-700 to-blue-900"
  },
  {
    title: "Hourly Rate",
    price: "$15/hr",
    description: "(Negotiable) 60-80Hr per Week, Full-Time Work! Perfect for studio integrations.",
    icon: <Clock className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500 to-purple-700"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950/80 -z-10" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white minecraft-font">
            Project Pricing
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto text-balance">
            Transparent pricing structured to fit projects of any scale and complexity.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`glassmorphism p-6 rounded-2xl relative group border ${tier.popular ? 'border-blue-500' : 'border-zinc-800'} hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-2`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                  MOST POPULAR
                </div>
              )}
              
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4 border border-zinc-800 group-hover:border-blue-500/30 transition-colors">
                {tier.icon}
              </div>
              
              <h3 className="text-lg font-bold text-zinc-300 mb-2">{tier.title}</h3>
              <div className="mb-4">
                <span className="text-2xl font-black text-white">{tier.price}</span>
              </div>
              
              <div className={`h-1 w-full bg-gradient-to-r ${tier.color} rounded-full mb-4 opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              <p className="text-sm text-zinc-400 flex-grow leading-relaxed">
                {tier.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
