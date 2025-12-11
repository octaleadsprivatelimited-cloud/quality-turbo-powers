import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutCertificationsSection from "@/components/AboutCertificationsSection";
import ServicesFacilitiesSection from "@/components/ServicesFacilitiesSection";
import StatsSection from "@/components/StatsSection";
import IndustriesSection from "@/components/IndustriesSection";
import GallerySection from "@/components/GallerySection";
import ClienteleSection from "@/components/ClienteleSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Helmet>
        <title>Quality Turbine Power Services | Industrial Turbine Services in Hyderabad | Rotating Equipment Solutions</title>
        <meta name="description" content="Quality Turbine Power Services - Leading provider of complete rotating equipment solutions in Hyderabad. Expert turbine erection, commissioning, overhauls, repairs, and maintenance services for power plants, petrochemicals, steel, cement, and oil & gas industries. Trusted since 2018." />
        <meta name="keywords" content="turbine services Hyderabad, power plant equipment services, turbine erection commissioning, turbine overhaul services, turbine repair maintenance, rotating equipment solutions, steam turbine services, gas turbine maintenance, industrial turbine services, Quality Turbo Power Services, QTPS Hyderabad, turbine maintenance India, power plant maintenance, industrial equipment repair, turbine reconditioning, STG sets, turbine blowers, turbine compressors, DG sets maintenance" />
        <meta property="og:title" content="Quality Turbine Power Services | Industrial Turbine Services in Hyderabad" />
        <meta property="og:description" content="Complete rotating equipment solutions - turbine erection, commissioning, overhauls, repairs, and maintenance services in Hyderabad. Serving power plants, petrochemicals, steel, cement, and oil & gas industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qualityturbopowerservices.com/" />
        <meta property="og:image" content="https://qualityturbopowerservices.com/logo.png" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://qualityturbopowerservices.com/" />
      </Helmet>
      <Header />
      <HeroSection />
      <AboutCertificationsSection />
      <ServicesFacilitiesSection />
      <StatsSection />
      <IndustriesSection />
      <GallerySection />
      <ClienteleSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
