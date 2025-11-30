import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                QUALITY TURBO POWER SERVICES
              </h1>
              <p className="text-xs md:text-sm opacity-90">
                An ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Company
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#company" className="hover:text-accent transition-colors">
              Company
            </a>
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#certifications" className="hover:text-accent transition-colors">
              Certifications
            </a>
            <Button variant="secondary" size="sm">
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
