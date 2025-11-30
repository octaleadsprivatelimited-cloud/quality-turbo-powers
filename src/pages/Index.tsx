import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import CertificationsSection from "@/components/CertificationsSection";
import ServicedUnitsSection from "@/components/ServicedUnitsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <CertificationsSection />
      <ServicedUnitsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
