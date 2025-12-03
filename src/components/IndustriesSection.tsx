import { Factory, Zap, Flame, Building2, Container, Cog, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IndustriesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const industries = [
    { icon: Zap, name: "Power Plants", color: "from-[#283852] to-[#72c530]", bg: "bg-amber-50" },
    { icon: Factory, name: "Petrochemicals", color: "from-[#283852] to-[#72c530]", bg: "bg-[#72c530]/10" },
    { icon: Building2, name: "Steel & Cement", color: "from-[#283852] to-[#72c530]", bg: "bg-slate-50" },
    { icon: Container, name: "Fertilizers", color: "from-[#283852] to-[#72c530]", bg: "bg-emerald-50" },
    { icon: Flame, name: "Oil & Gas", color: "from-[#283852] to-[#72c530]", bg: "bg-orange-50" },
    { icon: Cog, name: "Manufacturing", color: "from-[#283852] to-[#72c530]", bg: "bg-violet-50" },
  ];

  return (
    <section className="relative py-12 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div 
              className={`inline-flex items-center gap-2 bg-[#72c530]/10 border border-[#72c530]/20 text-[#283852] text-xs font-medium px-4 py-1.5 rounded-full mb-3 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              Industries We Serve
            </div>
            <h2 
              className={`text-2xl md:text-3xl font-semibold text-slate-900 mb-2 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Powering Diverse{" "}
              <span className="text-[#72c530]">
                Industrial Sectors
              </span>
            </h2>
            <p 
              className={`text-slate-600 text-sm max-w-xl mx-auto transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              From power generation to manufacturing, delivering excellence worldwide
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div 
                  key={index}
                  className={`group relative bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-[#72c530] hover:bg-[#72c530]/10 hover:shadow-lg transition-all duration-500 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                >
                  <div className="relative">
                    <div className={`w-10 h-10 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-medium text-xs text-slate-700 group-hover:text-[#72c530] transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#283852] to-[#72c530] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
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
              <Button className="bg-gradient-to-r from-[#283852] to-[#72c530] hover:from-[#283852] hover:to-[#72c530]/90 text-white rounded-lg h-10 px-6 text-sm shadow-lg shadow-[#72c530]/25 hover:shadow-xl hover:shadow-[#72c530]/30 transition-all duration-300 hover:-translate-y-0.5">
                View All Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
