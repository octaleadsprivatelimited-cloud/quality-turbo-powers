import { useState } from "react";

const ClienteleSection = () => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const clients = [
    { 
      name: "Linde", 
      logo: "https://logo.clearbit.com/linde.com" 
    },
    { 
      name: "ISGEC", 
      logo: "https://logo.clearbit.com/isgec.com" 
    },
    { 
      name: "PRAXAIR", 
      logo: "https://logo.clearbit.com/praxair.com" 
    },
  ];

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index));
  };

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Clients
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Trusted by leading companies across various industries
          </p>
        </div>

        {/* Clients Grid Layout - Circular Logos Only */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex items-center justify-center"
            >
              {/* Circular Logo Frame */}
              <div className="relative w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-white border-2 border-slate-200 group-hover:border-[#9ee055] shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden flex items-center justify-center p-2">
                {imageErrors.has(index) ? (
                  <div className="text-slate-700 font-semibold text-[8px] md:text-[10px] text-center leading-tight">
                    {client.name}
                  </div>
                ) : (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    onError={() => handleImageError(index)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;

