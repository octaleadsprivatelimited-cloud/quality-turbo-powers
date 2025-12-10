import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WelcomeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="company" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-5xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase">
            Welcome to Quality Turbo Power Services
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            Quality Turbo Power Services is a global service provider for power plant, Petrochemicals, 
            steel, fertilizers, cement, paper etc. services like Overhauls, Refurbishments, Spares & 
            Services, Repairs & Retrofits, Erection & Commissioning, Re Engineering and Relocation of 
            Power Plants. We have proficient, well experienced, highly qualified and technically skilled 
            team who are capable of facing any challenging projects and execute them successfully within 
            a stipulated time.
          </p>
          <Button variant="default" size="lg" className="bg-[#283852] hover:bg-[#283852]/90 text-white gap-2">
            View Details
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
