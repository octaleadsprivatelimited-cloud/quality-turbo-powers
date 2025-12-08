import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import ErectionCommissioning from "./pages/services/ErectionCommissioning";
import TroubleshootingOverhauls from "./pages/services/TroubleshootingOverhauls";
import RepairReconditioning from "./pages/services/RepairReconditioning";
import OperationMaintenance from "./pages/services/OperationMaintenance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="font-sans">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnNavigate />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/erection-commissioning" element={<ErectionCommissioning />} />
          <Route path="/services/troubleshooting-overhauls" element={<TroubleshootingOverhauls />} />
          <Route path="/services/repair-reconditioning" element={<RepairReconditioning />} />
          <Route path="/services/operation-maintenance" element={<OperationMaintenance />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
