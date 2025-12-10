import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Wrench, Settings, RefreshCw, Cog, CheckCircle2, ArrowRight, Sparkles, Factory, Zap, Box, Flame, Building2, Wheat, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import service images
import erectionImg from "@/assets/erection-commissioning.png";
import troubleshootingImg from "@/assets/troubleshooting-overhauls.jpg";
import repairImg from "@/assets/repair-reconditioning.jpg";
import maintenanceImg from "@/assets/operation-maintenance.png";

const Services = () => {
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation();

  const services = [
    {
      icon: Settings,
      title: "Erection & Commissioning",
      description: "World-class Erection & Commissioning Services with committed quality using advanced technology.",
      features: ["STG Sets", "Turbine Blowers", "Turbine Compressors", "DG Sets"],
      image: erectionImg,
      color: "from-[#283852] to-[#9ee055]",
      link: "/services/erection-commissioning"
    },
    {
      icon: Wrench,
      title: "Troubleshooting & Overhauls",
      description: "Complete technical and operational problem-solving that can affect plant performance.",
      features: ["Turbine Systems", "Turbine Generators", "Boilers", "Compressors"],
      image: troubleshootingImg,
      color: "from-[#283852] to-[#9ee055]",
      link: "/services/troubleshooting-overhauls"
    },
    {
      icon: RefreshCw,
      title: "Repair & Reconditioning",
      description: "Repair & Reconditioning of various Rotatory Equipments using sophisticated machines.",
      features: ["Advanced Tech", "Equipment Delivery", "Commissioning", "Quality Check"],
      image: repairImg,
      color: "from-[#283852] to-[#9ee055]",
      link: "/services/repair-reconditioning"
    },
    {
      icon: Cog,
      title: "Operation & Maintenance",
      description: "Fully integrated power plant operations and maintenance for optimal performance.",
      features: ["Plant Operations", "Utility Services", "Preventive Care", "24/7 Support"],
      image: maintenanceImg,
      color: "from-[#283852] to-[#9ee055]",
      link: "/services/operation-maintenance"
    },
    {
      icon: Package,
      title: "Spare Parts Supply",
      description: "Comprehensive spare parts supply for turbines, compressors, and rotating equipment with genuine OEM parts.",
      features: ["Genuine Parts", "Quick Delivery", "Wide Inventory", "Technical Support"],
      image: "/gallery/image-7.jpeg",
      color: "from-[#283852] to-[#9ee055]",
      link: "/services/spare-parts"
    }
  ];

  const industries = [
    { name: "Power Generation", icon: Zap, color: "from-[#283852] to-[#9ee055]" },
    { name: "Petrochemicals", icon: Factory, color: "from-[#283852] to-[#9ee055]" },
    { name: "Steel Plants", icon: Building2, color: "from-[#283852] to-[#9ee055]" },
    { name: "Cement Industry", icon: Box, color: "from-[#283852] to-[#9ee055]" },
    { name: "Fertilizers", icon: Wheat, color: "from-[#283852] to-[#9ee055]" },
    { name: "Paper Manufacturing", icon: Box, color: "from-[#283852] to-[#9ee055]" },
    { name: "Oil & Gas", icon: Flame, color: "from-[#283852] to-[#9ee055]" },
    { name: "Sugar Mills", icon: Cog, color: "from-[#283852] to-[#9ee055]" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Our Services | Quality Turbine Power Services - Turbine Solutions</title>
        <meta name="description" content="Comprehensive turbine services including erection & commissioning, troubleshooting & overhauls, repair & reconditioning, operation & maintenance, and spare parts supply. Expert solutions for rotating equipment." />
        <meta name="keywords" content="turbine erection, turbine commissioning, turbine overhaul, turbine repair, turbine maintenance, rotating equipment services, steam turbine services, gas turbine services, power plant maintenance" />
        <meta property="og:title" content="Our Services | Quality Turbine Power Services" />
        <meta property="og:description" content="Comprehensive turbine services - erection, commissioning, overhauls, repairs, and maintenance for rotating equipment." />
        <link rel="canonical" href="https://qualityturbopower.com/services" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={erectionImg} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#283852]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#283852]/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3 h-3" />
              Complete Rotating Equipment Solutions
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Our <span className="bg-gradient-to-r from-[#9ee055] to-[#283852] bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-sm text-white/70">
              Power plant equipment erection, services, troubleshooting, refurbishment & spare parts.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div 
            ref={servicesRef}
            className={`transition-all duration-700 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-[#9ee055] font-semibold text-sm uppercase tracking-wide mb-3">
                <span className="w-8 h-px bg-[#283852]" />
                What We Offer
                <span className="w-8 h-px bg-[#283852]" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Services <span className="text-[#283852]">Offered</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index} 
                    className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-500 ${
                      servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      
                      {/* Icon badge */}
                      <div className={`absolute top-4 left-4 w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Title overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <Link to={service.link}>
                          <h3 className="text-xl font-bold text-white hover:text-[#9ee055]/80 transition-colors cursor-pointer">{service.title}</h3>
                        </Link>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>

                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
                            <CheckCircle2 className="w-4 h-4 text-[#283852] flex-shrink-0" />
                            <span className="text-xs text-slate-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/contact">
                        <Button className="w-full bg-[#283852] hover:bg-[#283852]/90 text-white rounded-lg h-10 text-sm font-medium shadow-md transition-all duration-300">
                          Get a Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    
                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-16 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#283852]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#283852]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div 
            ref={industriesRef}
            className={`max-w-5xl mx-auto transition-all duration-700 ${industriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Header */}
            <div className="text-center mb-10">
              <div 
                className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-[#9ee055] text-xs font-semibold px-4 py-1.5 rounded-full mb-3 transition-all duration-700 delay-100 ${
                  industriesVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <Factory className="w-3 h-3" />
                Trusted Across Sectors
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Industries We{" "}
                <span className="bg-gradient-to-r from-[#9ee055] to-[#283852] bg-clip-text text-transparent">Serve</span>
              </h2>
            </div>

            {/* Industries Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div 
                    key={index}
                    className={`group relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#283852]/50 hover:bg-white/10 transition-all duration-500 cursor-default ${
                      industriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${200 + index * 70}ms` }}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#283852]/0 to-[#9ee055]/0 group-hover:from-[#283852]/10 group-hover:to-[#9ee055]/5 transition-all duration-500" />
                    
                    <div className="relative text-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm text-white group-hover:text-[#9ee055] transition-colors">
                        {industry.name}
                      </h3>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#283852] to-[#9ee055] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;
