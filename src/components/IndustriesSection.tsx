import { Factory, Zap, Flame, Building2, Container, Cog, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IndustriesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const industries = [
    { icon: Zap, name: "Power Plants", color: "from-[#283852] to-[#9ee055]", bg: "bg-amber-50" },
    { icon: Factory, name: "Petrochemicals", color: "from-[#283852] to-[#9ee055]", bg: "bg-[#9ee055]/10" },
    { icon: Building2, name: "Steel & Cement", color: "from-[#283852] to-[#9ee055]", bg: "bg-slate-50" },
    { icon: Container, name: "Fertilizers", color: "from-[#283852] to-[#9ee055]", bg: "bg-emerald-50" },
    { icon: Flame, name: "Oil & Gas", color: "from-[#283852] to-[#9ee055]", bg: "bg-orange-50" },
    { icon: Cog, name: "Manufacturing", color: "from-[#283852] to-[#9ee055]", bg: "bg-violet-50" },
  ];

  return (
    <section className="relative py-10 md:py-12 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div 
              className={`inline-flex items-center gap-2 bg-[#9ee055]/10 border border-[#9ee055]/20 text-[#283852] text-[10px] md:text-xs font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-2 md:mb-3 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <Sparkles className="w-2.5 md:w-3 h-2.5 md:h-3" />
              Industries We Serve
            </div>
            <h2 
              className={`text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900 mb-1.5 md:mb-2 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Powering Diverse{" "}
              <span className="text-[#9ee055]">
                Industrial Sectors
              </span>
            </h2>
            <p 
              className={`text-slate-600 text-xs md:text-sm max-w-xl mx-auto px-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              From power generation to manufacturing, delivering excellence worldwide
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 mb-6 md:mb-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div 
                  key={index}
                  className={`group relative bg-slate-50 rounded-lg md:rounded-xl p-3 md:p-4 border border-slate-100 hover:border-[#9ee055] hover:bg-[#9ee055]/10 hover:shadow-lg transition-all duration-500 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                >
                  <div className="relative">
                    <div className={`w-9 md:w-10 h-9 md:h-10 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mb-2 md:mb-3 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <Icon className="w-4 md:w-5 h-4 md:h-5 text-white" />
                    </div>
                    <h3 className="font-medium text-[10px] md:text-xs text-slate-700 group-hover:text-[#9ee055] transition-colors leading-tight">
                      {industry.name}
                    </h3>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-2 md:left-3 right-2 md:right-3 h-0.5 bg-gradient-to-r from-[#283852] to-[#9ee055] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div 
            className={`text-center transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link to="/industries">
              <Button className="bg-gradient-to-r from-[#283852] to-[#9ee055] hover:from-[#283852] hover:to-[#9ee055]/90 text-white rounded-lg h-9 md:h-10 px-5 md:px-6 text-xs md:text-sm shadow-lg shadow-[#9ee055]/25 hover:shadow-xl hover:shadow-[#9ee055]/30 transition-all duration-300 hover:-translate-y-0.5">
                View All Industries
                <ArrowRight className="ml-2 h-3.5 md:h-4 w-3.5 md:w-4" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
