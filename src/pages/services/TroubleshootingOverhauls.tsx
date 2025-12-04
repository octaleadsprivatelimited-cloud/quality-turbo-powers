import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Wrench, CheckCircle2, ArrowRight, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import troubleshootingImg from "@/assets/troubleshooting-overhauls.png";

const TroubleshootingOverhauls = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const features = [
    "Turbine Systems",
    "Turbo Generators",
    "Boilers & Auxiliaries",
    "Centrifugal Compressors",
    "Gas Turbines",
    "Control Systems"
  ];

  const services = [
    { title: "Diagnostic Analysis", desc: "Advanced diagnostic tools to identify root causes of equipment issues" },
    { title: "Major Overhauls", desc: "Complete disassembly, inspection, repair, and reassembly of turbines" },
    { title: "Minor Overhauls", desc: "Targeted repairs and component replacements for specific issues" },
    { title: "Spare Parts Supply", desc: "Genuine OEM spare parts supply with quick delivery for all turbine components" },
    { title: "Emergency Response", desc: "24/7 rapid response team for critical breakdowns" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <Helmet>
        <title>Troubleshooting & Overhauls | Quality Turbo Power Services</title>
        <meta name="description" content="Expert troubleshooting and overhaul services for turbines, generators, boilers, and compressors. Diagnostic analysis, major & minor overhauls, spare parts supply, and 24/7 emergency response." />
        <meta name="keywords" content="turbine troubleshooting, turbine overhaul, generator overhaul, boiler maintenance, compressor repair, turbine diagnostic, emergency turbine repair" />
        <meta property="og:title" content="Troubleshooting & Overhauls | Quality Turbo Power Services" />
        <meta property="og:description" content="Complete technical problem-solving and overhaul services for rotating equipment." />
        <link rel="canonical" href="https://qualityturbopower.com/services/troubleshooting-overhauls" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={troubleshootingImg} 
            alt="Troubleshooting & Overhauls" 
            className="w-full h-full object-cover object-center brightness-110 contrast-125 saturate-110" 
          />
          <div className="absolute inset-0 bg-slate-900/35" />
        </div>
        
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#283852]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#283852]/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#283852]/20 border border-[#283852]/30 text-[#72c530] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3 h-3" />
              Our Services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Troubleshooting & <span className="text-[#72c530]">Overhauls</span>
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Complete technical and operational problem-solving solutions for power plant equipment with expert diagnostic capabilities.
            </p>
            <Link to="/contact">
              <Button className="bg-[#283852] hover:bg-[#72c530] text-white rounded-xl h-12 px-8 shadow-lg shadow-[#283852]/25">
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
                  <div className="w-14 h-14 bg-gradient-to-br from-[#283852] to-[#72c530] rounded-xl flex items-center justify-center shadow-lg">
                    <Wrench className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Service Overview</h2>
                    <p className="text-slate-500 text-sm">Expert diagnostic & repair solutions</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  We are equipped to solve not only temporary problems but also the entire range of technical and operational problems that can affect a plant. Our team of experienced engineers uses state-of-the-art diagnostic equipment to identify and resolve issues quickly and effectively.
                </p>

                <p className="text-slate-600 leading-relaxed mb-4">
                  Whether it's a minor adjustment or a major overhaul, our comprehensive approach ensures your equipment returns to optimal performance with minimal downtime.
                </p>

                <p className="text-slate-600 leading-relaxed mb-8">
                  In addition to our repair services, we provide genuine spare parts supply for all types of rotating equipment. Our extensive inventory includes OEM parts for turbines, compressors, generators, and their auxiliary systems, ensuring quick replacement and minimal downtime for your operations.
                </p>

                {/* Features */}
                <h3 className="text-lg font-bold text-slate-900 mb-4">Equipment We Service</h3>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-[#283852] flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Services */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6">What We Offer</h3>
                <div className="space-y-5">
                  {services.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#72c530]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#283852]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#283852' }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Experiencing Equipment Issues?
            </h2>
            <p className="text-white/60 mb-8">
              Our expert team is ready to diagnose and resolve your problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="bg-white hover:bg-white/90 text-[#283852] font-semibold rounded-xl h-12 px-8">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-white/10 border border-white/20 text-white hover:bg-white/20 font-semibold rounded-xl h-12 px-8">
                  View All Services
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

export default TroubleshootingOverhauls;

