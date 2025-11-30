import heroImage from "@/assets/hero-powerplant.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      </div>
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Excellence in Turbine Services
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/95 mb-8 leading-relaxed">
            Global service provider for power plants, petrochemicals, steel, fertilizers, and cement industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
