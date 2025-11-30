const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quality Turbo Power Services</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Excellence in turbine services and power plant maintenance.
              ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Certified.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#company" className="text-sm hover:text-accent transition-colors">
                  About Company
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-accent transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-sm hover:text-accent transition-colors">
                  Certifications
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              For inquiries about our turbine services and industrial solutions,
              please contact us today.
            </p>
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
