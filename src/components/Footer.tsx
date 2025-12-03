import { Mail, Phone, ArrowUpRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
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
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-4 group">
                <div className="bg-white rounded-lg p-1.5 inline-block">
                  <img 
                    src={logoImg} 
                    alt="Quality Turbo Power Services" 
                    className="h-10 w-auto group-hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                A Complete Solution for Rotating Equipments. Providing world-class services since 2018.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <a 
                  href="mailto:qualityturboservices@gmail.com" 
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#72c530]" />
                  <span className="text-sm">qualityturboservices@gmail.com</span>
                </a>
                <a 
                  href="tel:+919492121315" 
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#72c530]" />
                  <span className="text-sm">+91 94921 21315</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-2">
                {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-9 h-9 bg-white/10 hover:bg-[#72c530] rounded-lg flex items-center justify-center transition-all"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.link} 
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Our Services</h4>
              <ul className="space-y-2">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.link} 
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Industries</h4>
              <ul className="space-y-2">
                {industries.map((item) => (
                  <li key={item}>
                    <Link 
                      to="/industries" 
                      className="text-white/80 hover:text-white text-sm transition-colors"
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
        <div className="border-t border-white/10 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-center">
            <span className="text-white/70 text-sm">
              © {new Date().getFullYear()} Quality Turbo Power Services. All rights reserved.
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="text-white/70 text-sm">
              Developed by{" "}
              <a 
                href="https://octaleads.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#72c530] hover:text-[#72c530]/80 transition-colors"
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
