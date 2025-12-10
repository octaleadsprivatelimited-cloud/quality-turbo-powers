import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Cog, CheckCircle2, ArrowRight, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import maintenanceImg from "@/assets/operation-maintenance.png";

const OperationMaintenance = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const features = [
    "Power Plant Operations",
    "Utility Services",
    "Preventive Maintenance",
    "Predictive Maintenance",
    "Condition Monitoring",
    "24/7 Support"
  ];

  const benefits = [
    { title: "Maximize Uptime", desc: "Proactive maintenance strategies to prevent unplanned outages" },
    { title: "Optimize Performance", desc: "Continuous monitoring and tuning for peak efficiency" },
    { title: "Reduce Costs", desc: "Preventive approach minimizes expensive emergency repairs" },
    { title: "Expert Support", desc: "Round-the-clock technical assistance from experienced engineers" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <Helmet>
        <title>Operation & Maintenance | Quality Turbine Power Services</title>
        <meta name="description" content="Comprehensive operation and maintenance services for power plants. Preventive & predictive maintenance, condition monitoring, and 24/7 support to maximize uptime and optimize performance." />
        <meta name="keywords" content="power plant operation, turbine maintenance, preventive maintenance, predictive maintenance, condition monitoring, O&M services, plant operations support" />
        <meta property="og:title" content="Operation & Maintenance | Quality Turbine Power Services" />
        <meta property="og:description" content="Professional O&M services for power plants with 24/7 support and condition monitoring." />
        <link rel="canonical" href="https://qualityturbopower.com/services/operation-maintenance" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={maintenanceImg} alt="Operation & Maintenance" className="w-full h-full object-cover" />
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
              Operation & <span className="text-[#9ee055]">Maintenance</span>
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Fully integrated power plant operations and maintenance services for optimal plant performance and reliability.
            </p>
            <Link to="/contact">
              <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white rounded-xl h-12 px-8 shadow-lg shadow-[#283852]/25">
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
                    <Cog className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Service Overview</h2>
                    <p className="text-slate-500 text-sm">Comprehensive O&M solutions</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8">
                  We provide fully integrated power plant operations and maintenance and utility services.
                </p>

                {/* Features */}
                <h3 className="text-lg font-bold text-slate-900 mb-4">Services Included</h3>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-[#283852] flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Benefits */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Key Benefits</h3>
                <div className="space-y-5">
                  {benefits.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#9ee055]/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
              Looking for O&M Partnership?
            </h2>
            <p className="text-white/60 mb-8">
              Let us help you optimize your plant operations and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-xl h-12 px-8">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-xl h-12 px-8">
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

export default OperationMaintenance;

