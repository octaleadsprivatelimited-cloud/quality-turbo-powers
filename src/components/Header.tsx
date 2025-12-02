import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar - Hidden on mobile */}
      <div className="hidden lg:block bg-white text-slate-600 py-1 border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-5">
              <a href="tel:+919492121315" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Phone className="w-3 h-3" />
                <span>+91 94921 21315</span>
              </a>
              <a href="mailto:qualityturboservices@gmail.com" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                <Mail className="w-3 h-3" />
                <span>qualityturboservices@gmail.com</span>
              </a>
            </div>
            <div className="text-slate-400">
              A Complete Solution for Rotating Equipments
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'shadow-lg shadow-slate-900/20' 
            : ''
        }`}
        style={{ backgroundColor: '#1a2c65' }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-white rounded-lg p-1">
                <img 
                  src={logoImg} 
                  alt="Quality Turbo Power Services" 
                  className="h-8 lg:h-10 w-auto group-hover:scale-105 transition-transform"
                />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                    isActive(link.href)
                      ? 'text-white bg-white/20'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="/brochure.pdf" 
                download="QTPS-Brochure.pdf"
                className="inline-flex items-center gap-2 px-4 h-9 text-sm font-medium text-white/80 hover:text-white border border-white/30 hover:border-white/50 rounded-full transition-all"
              >
                <Download className="w-4 h-4" />
                Brochure
              </a>
              <Link to="/contact">
                <Button 
                  size="sm"
                  className="bg-white hover:bg-white/90 text-[#1a2c65] rounded-full px-5 h-9 text-sm font-semibold shadow-md transition-all hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <Menu className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>

      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Slide-in Menu */}
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <span className="text-[#1a2c65] font-semibold">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4 text-[#1a2c65]" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all font-medium ${
                    isActive(link.href)
                      ? 'text-[#1a2c65] bg-blue-50'
                      : 'text-slate-600 hover:text-[#1a2c65] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400" />
                </Link>
              ))}
            </nav>

            {/* Mobile Contact */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
              <a 
                href="tel:+919492121315" 
                className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600"
              >
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[#1a2c65]" />
                </div>
                <span>24/7 Support Available</span>
              </a>
              <a 
                href="mailto:qualityturboservices@gmail.com" 
                className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600"
              >
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#1a2c65]" />
                </div>
                <span className="text-xs">qualityturboservices@gmail.com</span>
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <a 
                  href="/brochure.pdf" 
                  download="QTPS-Brochure.pdf"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1a2c65] border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </a>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    className="w-full bg-[#1a2c65] hover:bg-[#1a2c65]/90 text-white font-semibold rounded-xl"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
