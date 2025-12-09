import { useState, useEffect } from "react";
import logoImg from "@/assets/logo.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader once page is fully loaded
    const handleLoad = () => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Logo with animation */}
        <div className="relative">
          <img
            src={logoImg}
            alt="Quality Turbo Power Services"
            className="h-32 w-auto md:h-40 lg:h-48 object-contain animate-pulse"
          />
          {/* Spinning loader ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-4 border-[#9ee055] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        {/* Loading text */}
        <p className="mt-6 text-sm md:text-base text-slate-600 font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Preloader;

