import { useEffect, useState, useRef } from "react";
import { Users, Briefcase, Clock, Award } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      value: 7, 
      suffix: "+", 
      label: "Years Experience", 
      description: "Industry expertise",
      icon: Clock,
      color: "from-[#283852] to-[#9ee055]"
    },
    { 
      value: 15, 
      suffix: "+", 
      label: "Projects Completed", 
      description: "Successful deliveries",
      icon: Briefcase,
      color: "from-[#283852] to-[#9ee055]"
    },
    { 
      value: 20, 
      suffix: "+", 
      label: "Happy Clients", 
      description: "Trusted partnerships",
      icon: Users,
      color: "from-[#283852] to-[#9ee055]"
    },
    { 
      value: 24, 
      suffix: "/7", 
      label: "Support Available", 
      description: "Always ready",
      icon: Award,
      color: "from-[#283852] to-[#9ee055]"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9ee055]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9ee055]/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20 relative">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-1 md:py-1.5 mb-3 md:mb-4">
            <span className="w-2 h-2 bg-[#9ee055] rounded-full animate-pulse" />
            <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-wider">Our Impact</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white px-4">
            Delivering <span className="text-[#9ee055]">Excellence</span> Since 2018
          </h2>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 hover:bg-white/10 hover:border-[#9ee055]/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br ${stat.color} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                </div>
                
                {/* Number */}
                <div className="mb-1.5 md:mb-2">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tabular-nums">
                    {isVisible ? <CountUp target={stat.value} /> : 0}
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#9ee055]">{stat.suffix}</span>
                </div>
                
                {/* Label */}
                <h3 className="text-white font-semibold mb-0.5 md:mb-1 text-xs md:text-sm">{stat.label}</h3>
                <p className="text-white/50 text-[10px] md:text-xs">{stat.description}</p>
                
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#283852] to-[#9ee055] rounded-b-xl md:rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-8 md:mt-10 lg:mt-12 text-center px-4">
          <p className="text-white/60 text-xs md:text-sm">
            Trusted by leading power plants, petrochemical industries, and manufacturing units across India
          </p>
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
};

export default StatsSection;
