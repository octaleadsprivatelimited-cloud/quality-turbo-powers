const ServicedUnitsSection = () => {
  const units = [
    "ABB", "Alstom", "Ansaldo", "BBC", "Dresser-Rand", "Elliott",
    "General Electric", "MHI", "MAN GH", "MAN Turbo", "Shin Nippon",
    "Siemens", "Skoda", "Triveni", "Shaangu", "SEC", "DEC", "HTC"
  ];

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 uppercase">
          QTPS Serviced Units
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {units.map((unit) => (
            <div 
              key={unit}
              className="bg-secondary text-secondary-foreground px-6 py-4 rounded border border-border hover:bg-accent hover:text-accent-foreground transition-colors text-center font-semibold"
            >
              {unit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicedUnitsSection;
