import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Wrench, Clock, Users, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const AboutCertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    { icon: Wrench, text: "Overhauls & Refurbishments", color: "from-blue-500 to-blue-600" },
    { icon: Zap, text: "Erection & Commissioning", color: "from-blue-500 to-blue-600" },
    { icon: Target, text: "Repairs & Retrofits", color: "from-blue-500 to-blue-600" },
  ];


  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <div 
              className={`inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-amber-700 text-sm font-semibold px-5 py-2 rounded-full mb-4 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              About Us
            </div>
            <h2 
              className={`text-3xl md:text-4xl font-bold text-slate-900 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                Quality Turbo Power Services
              </span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - About Content */}
            <div className="lg:col-span-7">
              <div 
                className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[80px]" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Multi-Disciplinary Excellence</h3>
                      <p className="text-xs text-slate-500">Est. 2018, Hyderabad</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    A growth-oriented engineering organization with vast experience in Operation & Maintenance, 
                    Overhauls, Fabrication and Erection & Commissioning of rotating equipment.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {highlights.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={index}
                          className={`group bg-slate-50 hover:bg-white rounded-xl p-3 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-500 cursor-default ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                          }`}
                          style={{ transitionDelay: `${400 + index * 100}ms` }}
                        >
                          <div className={`w-9 h-9 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <Link to="/about">
                    <Button 
                      className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-xl h-10 px-6 shadow-lg shadow-slate-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Why Choose Us */}
            <div className="lg:col-span-5 space-y-4">
              <div 
                className={`flex items-center gap-2 transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-bold text-slate-900">Why Choose Us</h3>
              </div>

              {/* Features Cards */}
              <div className="space-y-3">
                {[
                  { icon: Users, title: "Expert Team", desc: "Skilled professionals" },
                  { icon: Clock, title: "Quick Response", desc: "24/7 emergency support" },
                  { icon: Target, title: "Strategic Location", desc: "Based in Hyderabad" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className={`group bg-white rounded-xl p-4 shadow-lg shadow-slate-100 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                          <p className="text-slate-500 text-xs">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Excellence Badge */}
              <div 
                className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-4 overflow-hidden transition-all duration-700 delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Trusted Partner</h4>
                    <p className="text-slate-400 text-xs">Quality services since 2018</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCertificationsSection;
