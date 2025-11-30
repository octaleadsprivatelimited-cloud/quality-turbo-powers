import { Factory, Zap, Flame, Building2, Container, Cog } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IndustriesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const industries = [
    {
      icon: Zap,
      name: "Power Plants",
      description: "Complete turbine services for thermal and combined cycle power generation facilities",
    },
    {
      icon: Factory,
      name: "Petrochemicals",
      description: "Specialized maintenance for refinery and petrochemical rotating equipment",
    },
    {
      icon: Building2,
      name: "Steel & Cement",
      description: "Industrial turbine services for heavy manufacturing and processing plants",
    },
    {
      icon: Container,
      name: "Fertilizers",
      description: "Critical equipment maintenance for fertilizer production facilities",
    },
    {
      icon: Flame,
      name: "Oil & Gas",
      description: "Offshore and onshore turbine maintenance and overhaul services",
    },
    {
      icon: Cog,
      name: "Manufacturing",
      description: "Rotating equipment services for diverse manufacturing operations",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Providing comprehensive turbine services across multiple industrial sectors worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className={`bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-accent/10 text-accent w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
