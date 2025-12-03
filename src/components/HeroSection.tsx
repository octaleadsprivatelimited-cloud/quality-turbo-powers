import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/Turbine.avif";

const HeroSection = () => {
  return (
    <section className="relative min-h-[420px] lg:min-h-[450px] flex items-center font-sans">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 bg-[#72c530] rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">Quality Turbo Power Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight">
              Excellence in
              <span className="block text-[#72c530]">Turbine Services</span>
            </h1>

            {/* Description */}
            <p className="text-base text-white/90 mb-6 max-w-lg">
              A Complete Solution for Rotating Equipments. Power plant equipment erection, services, trouble shooting, refurbishment & spare parts since 2018.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link to="/services">
                <Button className="bg-[#72c530] hover:bg-[#72c530]/90 text-white h-10 px-6 text-sm font-semibold rounded-lg">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-white/15 hover:bg-white/25 border border-white/40 text-white h-10 px-6 text-sm font-semibold rounded-lg">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/30">
              {[
                { value: "7+", label: "Years Experience" },
                { value: "15+", label: "Projects Done" },
                { value: "20+", label: "Clients" },
                { value: "24/7", label: "Support" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-xl md:text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Card */}
          <div className="hidden lg:block">
            <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl p-6 max-w-xs ml-auto">
              <div className="w-12 h-12 bg-[#283852] rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-white/80 text-sm mb-4">
                Fast turnaround times with expert teams ready to mobilize for your critical equipment needs.
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/30">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#283852] border-2 border-white/30 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#72c530] border-2 border-white/30 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#283852] border-2 border-white/30 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                <span className="text-white/80 text-sm">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
