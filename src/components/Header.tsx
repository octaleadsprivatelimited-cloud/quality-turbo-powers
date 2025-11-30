import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="flex flex-col">
              <h1 className="text-lg md:text-2xl font-bold tracking-tight">
                QUALITY TURBO POWER SERVICES
              </h1>
              <p className="text-xs md:text-sm opacity-90 hidden sm:block">
                An ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Company
              </p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#company" className="hover:text-accent transition-colors font-medium">
              Company
            </a>
            <a href="#services" className="hover:text-accent transition-colors font-medium">
              Services
            </a>
            <a href="#certifications" className="hover:text-accent transition-colors font-medium">
              Certifications
            </a>
            <Button variant="secondary" size="sm" className="gap-2">
              <Phone size={16} />
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#company" 
                className="hover:text-accent transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </a>
              <a 
                href="#services" 
                className="hover:text-accent transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#certifications" 
                className="hover:text-accent transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Certifications
              </a>
              <Button variant="secondary" size="sm" className="gap-2 w-full">
                <Phone size={16} />
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
