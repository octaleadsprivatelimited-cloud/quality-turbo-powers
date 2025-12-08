import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import service images
import erectionImg from "@/assets/erection-commissioning.png";
import troubleshootingImg from "@/assets/troubleshooting-overhauls.jpg";
import repairImg from "@/assets/repair-reconditioning.jpg";
import manufacturingImg from "@/assets/manufacturing.webp";
import operationMaintenanceImg from "@/assets/operation-maintenance.png";

const services = [
  {
    title: "Overhauls",
    image: troubleshootingImg,
    link: "/services/troubleshooting-overhauls"
  },
  {
    title: "Erection and Commissioning",
    image: erectionImg,
    link: "/services/erection-commissioning"
  },
  {
    title: "Manufacturing of Spares",
    image: manufacturingImg,
    link: "/services"
  },
  {
    title: "Repair & Refurbishment",
    image: repairImg,
    link: "/services/repair-reconditioning"
  },
  {
    title: "Annual Maintenance Contracts",
    image: operationMaintenanceImg,
    link: "/services/operation-maintenance"
  },
  {
    title: "Troubleshooting",
    image: troubleshootingImg,
    link: "/services/troubleshooting-overhauls"
  }
];

const ServicesFacilitiesSection = () => {
  return (
    <section className="py-10 md:py-12 lg:py-16 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 md:mb-3">Our Services</h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            A Complete Solution for Rotating Equipments
          </p>
        </div>

        {/* 6 Service Cards with Circular Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10">
          {services.map((service, index) => {
            return (
              <Link to={service.link} key={index}>
                <div className="group flex flex-col items-center cursor-pointer">
                  {/* Circular Image Icon */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-3 md:mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#283852]/20 to-[#9ee055]/20 group-hover:from-[#283852]/30 group-hover:to-[#9ee055]/30 transition-all duration-300" />
                  </div>
                  {/* Service Label */}
                  <h3 className="text-xs md:text-sm lg:text-base font-semibold text-slate-900 text-center group-hover:text-[#283852] transition-colors leading-tight px-2">
                    {service.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button className="bg-[#9ee055] hover:bg-[#9ee055]/90 text-white font-semibold rounded-lg px-6 md:px-8 h-10 md:h-11 text-sm md:text-base">
              View All Services <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesFacilitiesSection;
