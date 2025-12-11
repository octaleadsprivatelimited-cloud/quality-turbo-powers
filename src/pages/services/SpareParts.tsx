import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Package, CheckCircle2, ArrowRight, Phone, Sparkles, Truck, Shield, Clock, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import industriesImage from "@/assets/industries.jpg";

const SpareParts = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const features = [
    "Turbine Components & Blades",
    "Compressor Parts & Seals",
    "Generator Components",
    "Boiler Spare Parts",
    "Bearing & Seals",
    "Control System Components"
  ];

  const benefits = [
    { icon: Shield, title: "Genuine OEM Parts", desc: "Authentic parts from original equipment manufacturers" },
    { icon: Truck, title: "Quick Delivery", desc: "Fast shipping and delivery to minimize downtime" },
    { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support for urgent requirements" },
    { icon: Wrench, title: "Technical Support", desc: "Expert guidance for part selection and installation" }
  ];

  const categories = [
    { name: "Steam Turbine Parts", items: ["Rotor Blades", "Nozzle Rings", "Governor Valves", "Seal Rings"] },
    { name: "Gas Turbine Parts", items: ["Combustor Liners", "Turbine Blades", "Compressor Blades", "Fuel Nozzles"] },
    { name: "Compressor Parts", items: ["Impellers", "Diffusers", "Bearings", "Seals"] },
    { name: "Generator Parts", items: ["Stator Windings", "Rotor Windings", "Cooling Systems", "Excitation Systems"] }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <Helmet>
        <title>Spare Parts Supply | Quality Turbine Power Services</title>
        <meta name="description" content="Comprehensive spare parts supply for turbines, compressors, generators, and rotating equipment. Genuine OEM parts with quick delivery and technical support." />
        <meta name="keywords" content="turbine spare parts, compressor spare parts, generator spare parts, OEM parts, power plant spare parts, rotating equipment parts" />
        <meta property="og:title" content="Spare Parts Supply | Quality Turbine Power Services" />
        <meta property="og:description" content="Genuine spare parts supply for turbines, compressors, and rotating equipment with quick delivery." />
        <link rel="canonical" href="https://qualityturbopower.com/services/spare-parts" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={industriesImage} alt="Spare Parts" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#283852]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#283852]/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#283852]/20 border border-[#283852]/30 text-[#9ee055] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3 h-3" />
              Our Services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Spare Parts <span className="text-[#9ee055]">Supply</span>
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Comprehensive spare parts supply for turbines, compressors, and rotating equipment with genuine OEM parts and quick delivery.
            </p>
            <Link to="/contact">
              <Button className="bg-[#9ee055] hover:bg-[#9ee055]/90 text-white rounded-xl h-12 px-8 shadow-lg shadow-[#9ee055]/25">
                <Phone className="w-4 h-4 mr-2" />
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div 
            ref={contentRef}
            className={`transition-all duration-700 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#283852] to-[#9ee055] rounded-xl flex items-center justify-center shadow-lg">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Service Overview</h2>
                    <p className="text-slate-500 text-sm">Complete parts supply solutions</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  We provide comprehensive spare parts supply for all types of rotating equipment including turbines, compressors, generators, and their auxiliary systems. Our extensive inventory includes genuine OEM parts ensuring reliability and optimal performance.
                </p>

                <p className="text-slate-600 leading-relaxed mb-8">
                  With our wide network of suppliers and manufacturers, we can source and deliver critical spare parts quickly, minimizing downtime and ensuring your operations continue smoothly. Our technical team provides expert guidance for part selection and compatibility.
                </p>

                {/* Detailed Parts List */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Available Spare Parts Include:</h3>
                  <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <p className="text-slate-700 leading-relaxed mb-3">
                      Guide Blades, Moving Blades, Diaphragms, Journal Bearings of Cylindrical, Two Lobe, Four Lobe, Tilting Pads, Sleeve Bearings and Thrust bearings, Governing System-Spindles, Valve Cones, Bolts, Complete Yoke Assemble, Servomotor & Pilot Valve Assemblies, Steam Glands, Oil Gland Assemblies, Pinion & Gear, Wheel Shafts for Gear Boxes, Impellers & Shafts Etc.,
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Why Choose Us</h3>
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-5 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#283852] to-[#9ee055] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">{benefit.title}</h4>
                          <p className="text-slate-600 text-sm">{benefit.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Parts <span className="text-[#283852]">Categories</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We supply spare parts for all major rotating equipment categories
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{category.name}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#9ee055] flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-neutral-900">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Spare Parts?</h3>
            <p className="text-white/70 mb-8">
              Contact us for quick delivery of genuine OEM parts for your rotating equipment. Our team is ready to assist you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-lg h-11 px-8">
                  Request Parts Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-lg h-11 px-8">
                  View All Services
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

export default SpareParts;

