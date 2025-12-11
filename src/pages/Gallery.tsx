import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useState, useEffect } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import industriesImage from "@/assets/industries.jpg";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, src: "/gallery/image-1.jpeg", alt: "Gallery Image 1" },
    { id: 2, src: "/gallery/image-2.jpeg", alt: "Gallery Image 2" },
    { id: 3, src: "/gallery/image-3.jpeg", alt: "Gallery Image 3" },
    { id: 4, src: "/gallery/image-4.jpeg", alt: "Gallery Image 4" },
    { id: 5, src: "/gallery/image-5.jpeg", alt: "Gallery Image 5" },
    { id: 6, src: "/gallery/image-6.jpeg", alt: "Gallery Image 6" },
    { id: 7, src: "/gallery/image-7.jpeg", alt: "Spare Parts" },
    { id: 8, src: "/gallery/image-8.jpeg", alt: "Gallery Image 8" },
    { id: 9, src: "/gallery/image-9.jpeg", alt: "Gallery Image 9" },
    { id: 10, src: "/gallery/image-10.jpeg", alt: "Gallery Image 10" },
    { id: 11, src: "/gallery/image-11.jpeg", alt: "Gallery Image 11" },
    { id: 12, src: "/gallery/image-12.jpeg", alt: "Gallery Image 12" },
    { id: 14, src: "/gallery/image-14.jpeg", alt: "Gallery Image 14" },
    { id: 16, src: "/gallery/image-16.jpeg", alt: "Gallery Image 16" },
    { id: 17, src: "/gallery/image-17.jpeg", alt: "Gallery Image 17" },
    { id: 19, src: "/gallery/image-19.jpeg", alt: "Gallery Image 19" },
    { id: 23, src: "/gallery/image-23.jpeg", alt: "Gallery Image 23" },
    { id: 24, src: "/gallery/image-24.jpeg", alt: "Gallery Image 24" },
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev! + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImageIndex, galleryImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Gallery | Quality Turbine Power Services</title>
        <meta name="description" content="View our project gallery showcasing our turbine services, overhauls, and engineering solutions." />
        <link rel="canonical" href="https://qualityturbopower.com/gallery" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={industriesImage} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              Our <span className="text-[#9ee055] drop-shadow-lg">Gallery</span>
            </h1>
            <p className="text-sm text-white/70">
              Explore our projects and see the quality of our work in action
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-slate-100 aspect-square"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal Slider */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm z-10">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Gallery;

