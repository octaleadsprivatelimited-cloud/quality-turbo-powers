import cert1 from "@/assets/iso-cert-1.jpg";
import cert2 from "@/assets/iso-cert-2.jpg";
import cert3 from "@/assets/iso-cert-3.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 uppercase">
          ISO Certified Company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div 
            className={`bg-background rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <img 
              src={cert1} 
              alt="ISO 9001:2015 Quality Management Certification" 
              className="w-full h-auto"
            />
          </div>
          <div 
            className={`bg-background rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <img 
              src={cert2} 
              alt="ISO 14001:2015 Environmental Management Certification" 
              className="w-full h-auto"
            />
          </div>
          <div 
            className={`bg-background rounded-lg shadow-lg overflow-hidden hover-lift transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <img 
              src={cert3} 
              alt="ISO 45001:2018 Occupational Health and Safety Certification" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
