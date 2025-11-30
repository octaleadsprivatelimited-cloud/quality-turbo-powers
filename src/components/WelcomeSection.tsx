import { Button } from "@/components/ui/button";

const WelcomeSection = () => {
  return (
    <section id="company" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl">
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
          <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90">
            View Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
