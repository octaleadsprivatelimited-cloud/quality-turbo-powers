import { useState } from "react";

const ClienteleSection = () => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const clients = [
    { 
      name: "Client 1", 
      logo: "/clients/client-1.png" 
    },
    { 
      name: "Client 2", 
      logo: "/clients/client-2.jpeg" 
    },
    { 
      name: "Client 3", 
      logo: "/clients/client-3.jpeg" 
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

        {/* Clients Carousel Layout */}
        <div className="flex items-center justify-center gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex-shrink-0"
            >
              <div className="relative w-32 h-24 md:w-40 md:h-28 bg-white border border-slate-300 rounded-lg hover:border-[#283852] hover:shadow-md transition-all duration-300 flex items-center justify-center p-3 md:p-4">
                {imageErrors.has(index) ? (
                  <div className="text-slate-700 font-semibold text-xs md:text-sm text-center">
                    {client.name}
                  </div>
                ) : (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
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

