import { Button } from "@/components/ui/button";
import { ArrowRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const previewImages = [
    { src: "/gallery/image-1.jpeg", alt: "Gallery Preview 1" },
    { src: "/gallery/image-2.jpeg", alt: "Gallery Preview 2" },
    { src: "/gallery/image-3.jpeg", alt: "Gallery Preview 3" },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#9ee055]/10 border border-[#9ee055]/20 text-[#283852] text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mb-3 md:mb-4">
            <Images className="w-4 h-4" />
            Our Projects
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
            Project <span className="text-[#9ee055]">Gallery</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Explore our completed projects and see the quality of our work
          </p>
        </div>

        {/* Preview Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {previewImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square bg-slate-200"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/gallery">
            <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-lg px-6 md:px-8 h-10 md:h-11 text-sm md:text-base">
              View Full Gallery
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

