import { Users, Award, Briefcase, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Skilled Professionals",
    },
    {
      icon: Briefcase,
      number: "1000+",
      label: "Projects Completed",
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
    },
    {
      icon: Award,
      number: "30+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-accent text-accent-foreground p-4 rounded-full">
                    <Icon size={32} />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
