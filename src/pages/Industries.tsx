import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Factory, Zap, Flame, Building2, Container, Cog, ArrowRight, CheckCircle2, Sparkles, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import industriesImage from "@/assets/industries.jpg";

const Industries = () => {
  const { ref: industriesRef, isVisible: industriesVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const industries = [
    {
      icon: Zap,
      name: "Power Plants",
      description: "Complete turbine services for thermal and combined cycle power generation facilities.",
      services: ["Turbine Overhauls", "Generator Services", "Boiler Maintenance", "Control Systems"],
      color: "from-[#283852] to-[#9ee055]"
    },
    {
      icon: Factory,
      name: "Petrochemicals",
      description: "Specialized maintenance for refinery and petrochemical rotating equipment.",
      services: ["Compressor Services", "Pump Overhauls", "Turbine Expanders", "Reactor Maintenance"],
      color: "from-[#283852] to-[#9ee055]"
    },
    {
      icon: Building2,
      name: "Steel & Cement",
      description: "Industrial turbine services for heavy manufacturing and processing plants.",
      services: ["Kiln Drive Systems", "Rolling Mill Motors", "Blower Services", "Heat Recovery"],
      color: "from-[#283852] to-[#9ee055]"
    },
    {
      icon: Container,
      name: "Fertilizers",
      description: "Critical equipment maintenance for fertilizer production facilities.",
      services: ["Synthesis Gas Compressors", "Ammonia Converters", "Prilling Towers", "Steam Systems"],
      color: "from-[#283852] to-[#9ee055]"
    },
    {
      icon: Flame,
      name: "Oil & Gas",
      description: "Offshore and onshore turbine maintenance and overhaul services.",
      services: ["Gas Turbines", "Centrifugal Compressors", "Pumping Stations", "Pipeline Equipment"],
      color: "from-[#283852] to-[#9ee055]"
    },
    {
      icon: Cog,
      name: "Manufacturing",
      description: "Rotating equipment services for diverse manufacturing operations.",
      services: ["Paper Mill Drives", "Sugar Mill Equipment", "Textile Machinery", "General Manufacturing"],
      color: "from-[#283852] to-[#9ee055]"
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Industries We Serve | Quality Turbo Power Services - Power Plants, Petrochemicals, Steel, Cement</title>
        <meta name="description" content="Serving power generation, petrochemicals, steel plants, cement, fertilizers, oil & gas, and manufacturing industries. Quality Turbo provides specialized rotating equipment solutions including turbine overhauls, compressor services, generator maintenance, and industrial equipment repair across diverse industrial sectors." />
        <meta name="keywords" content="power plant turbine services, petrochemical turbine maintenance, steel plant equipment services, cement industry turbine services, fertilizer plant maintenance, oil gas turbine services, sugar mill equipment, paper mill drives, industrial turbine services, thermal power plant services, combined cycle power plant, refinery rotating equipment, kiln drive systems, synthesis gas compressors, gas turbine maintenance" />
        <meta property="og:title" content="Industries We Serve | Quality Turbo Power Services - Power Plants, Petrochemicals, Steel, Cement" />
        <meta property="og:description" content="Specialized rotating equipment solutions across power generation, petrochemicals, steel, cement, fertilizers, oil & gas, and manufacturing industries." />
        <meta property="og:url" content="https://qualityturbopowerservices.com/industries" />
        <meta property="og:image" content="https://qualityturbopowerservices.com/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://qualityturbopowerservices.com/industries" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={industriesImage} alt="Industries" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#283852]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#283852]/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3 h-3" />
              Global Industrial Solutions
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              Industries We <span className="text-[#9ee055] drop-shadow-lg">Serve</span>
            </h1>
            <p className="text-sm text-white/70">
              Comprehensive turbine services across multiple industrial sectors worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div 
            ref={industriesRef}
            className={`transition-all duration-700 ${industriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-[#9ee055] font-semibold text-sm uppercase tracking-wide mb-3">
                <span className="w-8 h-px bg-[#283852]" />
                Our Expertise
                <span className="w-8 h-px bg-[#283852]" />
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Sectors We <span className="text-[#283852]">Specialize In</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div 
                    key={index} 
                    className={`group relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-500 ${
                      industriesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Top gradient bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${industry.color}`} />
                    
                    <div className="p-4 md:p-6">
                      {/* Icon and Title */}
                      <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${industry.color} rounded-lg md:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-[#9ee055] transition-colors leading-tight">
                            {industry.name}
                          </h3>
                          <p className="text-slate-500 text-xs md:text-sm mt-1 leading-relaxed">
                            {industry.description}
                          </p>
                        </div>
                      </div>

                      {/* Services */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 md:mb-5">
                        {industry.services.map((service, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-slate-50 rounded-lg px-2 md:px-3 py-1.5 md:py-2">
                            <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#283852] flex-shrink-0 mt-0.5" />
                            <span className="text-[10px] md:text-xs text-slate-700 leading-tight">{service}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link to="/contact">
                        <Button className="w-full bg-[#283852] hover:bg-[#283852]/90 text-white rounded-lg h-9 md:h-10 text-xs md:text-sm font-medium shadow-md transition-all duration-300">
                          Get a Quote
                          <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#283852]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#283852]/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div 
            ref={ctaRef}
            className={`max-w-2xl mx-auto text-center transition-all duration-700 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#9ee055] text-xs font-semibold px-4 py-2 rounded-full mb-4">
              <Phone className="w-3 h-3" />
              Get in Touch
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don't See Your <span className="text-[#9ee055]">Industry?</span>
            </h2>
            <p className="text-white/60 mb-8 text-sm">
              Contact us to discuss your specific requirements. We provide custom solutions for unique industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-xl h-12 px-8 shadow-lg shadow-[#283852]/25">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-xl h-12 px-8 transition-all duration-300">
                  View Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Industries;
