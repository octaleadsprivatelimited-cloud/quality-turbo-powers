import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Field Support & Engineering Services",
      description: "QTPS has wide range of experts to meet any job requirements relating to Rotating Equipment. We provide comprehensive field support and engineering solutions for all types of turbines and power generation equipment.",
      image: service1,
    },
    {
      title: "In-Situ Machining of Rotors",
      description: "Specialized in-situ machining services for turbine rotors and critical components. Our advanced equipment and experienced technicians ensure precision work without the need for equipment removal.",
      image: service2,
    },
    {
      title: "Overhauls & Refurbishments",
      description: "Complete overhaul and refurbishment services for steam turbines, gas turbines, and rotating equipment. We extend equipment life and improve performance through systematic maintenance and upgrades.",
      image: service3,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16 uppercase">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="outline" className="w-full gap-2 group">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
