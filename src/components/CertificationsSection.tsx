import cert1 from "@/assets/iso-cert-1.jpg";
import cert2 from "@/assets/iso-cert-2.jpg";
import cert3 from "@/assets/iso-cert-3.jpg";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 uppercase">
          ISO Certified Company
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img 
              src={cert1} 
              alt="ISO 9001:2015 Quality Management Certification" 
              className="w-full h-auto"
            />
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img 
              src={cert2} 
              alt="ISO 14001:2015 Environmental Management Certification" 
              className="w-full h-auto"
            />
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
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
