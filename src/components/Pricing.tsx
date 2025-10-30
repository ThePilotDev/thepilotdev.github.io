import { useAppleScrollZoom } from "@/hooks/useAppleScroll";

const pricingTiers = [
  {
    name: "Small Projects",
    price: "$300 - $500",
    description: "Perfect for simple addons, small maps, or minor modifications to existing content.",
    features: [
      "Simple add-ons",
      "Small custom maps",
      "Minor modifications",
      "Quick turnaround",
    ],
  },
  {
    name: "Medium Projects",
    price: "$500 - $1000",
    description: "Ideal for custom mobs, unique weapons, or medium-sized adventure maps with custom mechanics.",
    features: [
      "Custom mobs",
      "Unique weapons",
      "Medium adventure maps",
      "Custom mechanics",
    ],
    popular: true,
  },
  {
    name: "Advanced Projects",
    price: "$1000 - $2000",
    description: "Complex systems, custom UIs, or comprehensive behavior packs with advanced features.",
    features: [
      "Complex systems",
      "Custom UI design",
      "Advanced behavior packs",
      "Scripting integration",
    ],
  },
  {
    name: "Large Projects",
    price: "$2000 - $5000+",
    description: "Complete marketplace worlds, extensive modpacks, or long-term collaborative projects.",
    features: [
      "Marketplace worlds",
      "Extensive modpacks",
      "Long-term projects",
      "Full support",
    ],
  },
];

const PricingCard = ({ tier, index }: { tier: typeof pricingTiers[0]; index: number }) => {
  const { scale, opacity, elementRef } = useAppleScrollZoom();

  return (
    <div
      ref={elementRef}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      }}
    >
      <div
        className={`gradient-card rounded-3xl p-8 shadow-apple hover:shadow-xl transition-all duration-500 h-full ${
          tier.popular ? "border-2 border-accent" : ""
        }`}
      >
        {tier.popular && (
          <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Most Popular
          </div>
        )}
        <h3 className="text-2xl font-bold mb-3">{tier.name}</h3>
        <div className="text-4xl font-bold text-accent mb-4">{tier.price}</div>
        <p className="text-muted-foreground mb-6 text-balance">{tier.description}</p>
        <ul className="space-y-3">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-accent flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  const { scale: hourlyScale, opacity: hourlyOpacity, elementRef: hourlyRef } = useAppleScrollZoom();

  return (
    <section id="pricing" className="py-32 md:py-40 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Project Pricing
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Flexible pricing options for projects of any size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} index={index} />
          ))}
        </div>

        <div
          ref={hourlyRef}
          className="max-w-3xl mx-auto"
          style={{
            transform: `scale(${hourlyScale})`,
            opacity: hourlyOpacity,
            transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
          }}
        >
          <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-apple text-center">
            <h3 className="text-3xl font-bold mb-4">Hourly Rate</h3>
            <div className="text-5xl md:text-6xl font-bold text-accent mb-3">$30/hr</div>
            <p className="text-muted-foreground text-lg mb-4">(Negotiable)</p>
            <p className="text-foreground/80 text-xl">53-70 hours per week available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
