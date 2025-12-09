import { Mail, Phone, ArrowUpRight, Linkedin, Twitter, Facebook, Instagram, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import footerBg from "@/assets/hero-powerplant.jpg";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  const services = [
    { name: "Erection & Commissioning", link: "/services/erection-commissioning" },
    { name: "Troubleshooting & Overhauls", link: "/services/troubleshooting-overhauls" },
    { name: "Repair & Reconditioning", link: "/services/repair-reconditioning" },
    { name: "Operation & Maintenance", link: "/services/operation-maintenance" }
  ];

  const quickLinks = [
    { name: "About Us", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Industries", link: "/industries" },
    { name: "Contact Us", link: "/contact" }
  ];

  const industries = ["Power Plants", "Petrochemicals", "Steel & Cement", "Oil & Gas"];

  return (
    <footer className="relative overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={footerBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-6 md:py-8 lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 sm:col-span-2 md:col-span-1">
              <Link to="/" className="inline-block mb-3 md:mb-4 group h-10 md:h-12 overflow-hidden">
                <img 
                  src={logoImg} 
                  alt="Quality Turbine Power Services" 
                  className="h-20 md:h-28 lg:h-32 w-auto object-contain group-hover:scale-105 transition-transform -mt-2 md:-mt-4 lg:-mt-6"
                />
              </Link>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                A Complete Solution for Rotating Equipments. Providing world-class services since 2018.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                <div className="flex items-start gap-2 md:gap-3 text-white/80">
                  <MapPin className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#9ee055] flex-shrink-0 mt-0.5" />
                  <div className="text-xs md:text-sm">
                    <div className="font-semibold text-white mb-1">Registered Office:</div>
                    <div>H.No. 7-66/1, Sai Ram Colony,</div>
                    <div>Patancheru, Hyderabad - 509 319</div>
                  </div>
                </div>
                <a 
                  href="mailto:qualityturboservices@gmail.com" 
                  className="flex items-center gap-2 md:gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <Mail className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#9ee055] flex-shrink-0" />
                  <span className="text-xs md:text-sm break-all">qualityturboservices@gmail.com</span>
                </a>
                <a 
                  href="tel:+919492121315" 
                  className="flex items-center gap-2 md:gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <Phone className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#9ee055] flex-shrink-0" />
                  <span className="text-xs md:text-sm">+91 94921 21315</span>
                </a>
                <a 
                  href="tel:+919492125536" 
                  className="flex items-center gap-2 md:gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <Phone className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#9ee055] flex-shrink-0" />
                  <span className="text-xs md:text-sm">+91 94921 25536</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-2">
                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-8 md:w-9 h-8 md:h-9 bg-white/10 hover:bg-[#9ee055] rounded-lg flex items-center justify-center transition-all"
                  >
                    <Icon className="w-3.5 md:w-4 h-3.5 md:h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-2 md:mb-3 text-xs md:text-sm">Quick Links</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.link} 
                      className="text-white/80 hover:text-white text-xs md:text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-2 md:mb-3 text-xs md:text-sm">Our Services</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.link} 
                      className="text-white/80 hover:text-white text-xs md:text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-white font-semibold mb-2 md:mb-3 text-xs md:text-sm">Industries</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {industries.map((item) => (
                  <li key={item}>
                    <Link 
                      to="/industries" 
                      className="text-white/80 hover:text-white text-xs md:text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-center px-4">
            <span className="text-white/70 text-xs md:text-sm">
              © {new Date().getFullYear()} Quality Turbine Power Services. All rights reserved.
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="text-white/70 text-xs md:text-sm">
              Developed by{" "}
              <a 
                href="https://octaleads.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#9ee055] hover:text-[#9ee055]/80 transition-colors"
              >
                Octaleads Private Limited
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
