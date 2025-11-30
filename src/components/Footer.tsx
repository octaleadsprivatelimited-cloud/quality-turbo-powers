import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quality Turbo Power Services</h3>
            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Excellence in turbine services and power plant maintenance.
              ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Certified.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
              <MapPin size={16} />
              <span>Global Industrial Solutions Provider</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#company" className="text-sm hover:text-accent transition-colors flex items-center gap-2">
                  About Company
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-accent transition-colors flex items-center gap-2">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-sm hover:text-accent transition-colors flex items-center gap-2">
                  Certifications
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Phone size={16} />
                <span>Available 24/7 for emergencies</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Mail size={16} />
                <span>info@qualitytps.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Quality Turbo Power Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
