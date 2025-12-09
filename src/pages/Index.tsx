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
        <title>Quality Turbine Power Services | Industrial Turbine Services in Hyderabad</title>
        <meta name="description" content="Quality Turbine Power Services offers complete rotating equipment solutions including turbine erection, commissioning, overhauls, repairs, and maintenance services. Based in Hyderabad, serving industries across India." />
        <meta name="keywords" content="turbine services, power plant equipment, erection commissioning, turbine overhaul, turbine repair, rotating equipment, Hyderabad, industrial maintenance, steam turbine, gas turbine" />
        <meta property="og:title" content="Quality Turbine Power Services | Industrial Turbine Services" />
        <meta property="og:description" content="Complete rotating equipment solutions - turbine erection, commissioning, overhauls, repairs, and maintenance services in Hyderabad." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://qualityturbopower.com/" />
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
