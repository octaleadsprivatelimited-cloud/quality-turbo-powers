import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import StatsSection from "@/components/StatsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ServicedUnitsSection from "@/components/ServicedUnitsSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <StatsSection />
      <CertificationsSection />
      <ServicedUnitsSection />
      <ServicesSection />
      <IndustriesSection />
      <Footer />
    </div>
  );
};

export default Index;
