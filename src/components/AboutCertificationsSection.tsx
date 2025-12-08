import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import service1Img from "@/assets/service-1.jpg";

const AboutCertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      type: "Completed Projects",
      company: "M/s KRIBHCO",
      description: "Make: GE-Power, Rating Power: 76MW",
      image: service1Img,
      link: "/completed-projects"
    }
  ];


  return (
    <section className="relative py-10 md:py-12 lg:py-16 overflow-hidden bg-white">
      <div className="relative container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Welcome Section */}
            <div className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
              {/* Welcome Heading */}
              <div className="mb-4 md:mb-6">
                <p className="text-slate-600 text-sm md:text-base font-medium mb-2">
                  WELCOME To
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                  <span className="text-[#9ee055]">QUALITY TURBO</span>
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#9ee055]">
                  POWER SERVICES
                </h2>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                M/s. Quality Turbo Power Services is a multi-disciplinary, growth oriented, Engineering and service organization headquartered in Hyderabad, established in 2018, by a group of Engineers with the primary focus to serve the power/process industry. We as an organization have varied & vast experience in Engineering, Operation & Maintenance, Overhauls, Troubleshooting, Fabrication and Erection & Commissioning of rotating equipment & its auxiliaries...
              </p>

              {/* Read More Button */}
              <Link to="/about">
                <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-lg px-6 md:px-8 h-10 md:h-11 text-sm md:text-base">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Right Column - Project Cards */}
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-lg ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 md:h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.company} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-4 md:p-5">
                    <h3 className="text-slate-900 font-bold text-sm md:text-base mb-2">
                      {project.type}
                    </h3>
                    <p className="text-slate-700 font-semibold text-sm md:text-base mb-1">
                      {project.company}
                    </p>
                    <p className="text-slate-600 text-xs md:text-sm mb-4">
                      {project.description}
                    </p>
                    
                    {/* Read More Button */}
                    <Link to={project.link}>
                      <Button className="w-full bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-lg h-9 md:h-10 text-xs md:text-sm">
                        Read More
                        <ArrowRight className="ml-2 h-3.5 md:h-4 w-3.5 md:w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCertificationsSection;
