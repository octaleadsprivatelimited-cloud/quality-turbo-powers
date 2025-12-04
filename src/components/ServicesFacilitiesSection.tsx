import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Wrench, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

// Import service images
import erectionImg from "@/assets/erection-commissioning.png";
import troubleshootingImg from "@/assets/troubleshooting-overhauls.png";
import repairImg from "@/assets/repair-reconditioning.jpg";

const services = [
  {
    title: "Erection & Commissioning",
    description: "World-class Erection & Commissioning Services with committed quality using advanced technology.",
    image: erectionImg,
    icon: Settings
  },
  {
    title: "Troubleshooting & Overhauls",
    description: "Complete solutions for turbine systems, generators, boilers and auxiliaries.",
    image: troubleshootingImg,
    icon: Wrench
  },
  {
    title: "Repair & Reconditioning",
    description: "Advanced repair and reconditioning of various rotatory equipments.",
    image: repairImg,
    icon: RefreshCw
  }
];

const ServicesFacilitiesSection = () => {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A Complete Solution for Rotating Equipments
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link to="/services" key={index}>
                <div className="group relative rounded-2xl overflow-hidden h-full cursor-pointer">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-105 contrast-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
                  <div className="relative p-6 min-h-[280px] flex flex-col justify-end">
                    <div className="w-12 h-12 bg-[#72c530] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{service.description}</p>
                    <span className="text-[#72c530] text-sm font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button className="bg-[#72c530] hover:bg-[#72c530]/90 text-white font-semibold rounded-lg px-8 h-11">
              View All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesFacilitiesSection;
