import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroTurbineRotor from "@/assets/hero-turbine-rotor.jpg";
import heroTdpsGenerator from "@/assets/hero-tdps-generator.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroTurbineRotor,
      title: "Major Overhauling of 32MW HTC make Turbine Rotor",
      subtitle: "Expert Turbine Services"
    },
    {
      image: heroTdpsGenerator,
      title: "Major Overhauling of 18MW TDPS Generator",
      subtitle: "Complete Power Plant Solutions"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative hero-section-mobile md:min-h-[420px] lg:min-h-[500px] flex items-center font-sans overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 hero-bg-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover hero-bg-image"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 lg:px-12 xl:px-20 py-8 md:py-10 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading with slide-specific title - Two lines */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 md:mb-3 leading-tight line-clamp-2">
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#9ee055] font-medium mb-4 md:mb-5">
            {slides[currentSlide].subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3 justify-center">
            <Link to="/services" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#283852] hover:bg-[#283852]/90 text-white h-8 md:h-10 px-4 md:px-6 text-xs md:text-sm font-semibold rounded-lg">
                Explore Services
                <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#283852] hover:bg-[#283852]/90 text-white h-8 md:h-10 px-4 md:px-6 text-xs md:text-sm font-semibold rounded-lg">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#9ee055] w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
