
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import DatabaseManagement from "./pages/services/DatabaseManagement";
import ApiDevelopment from "./pages/services/ApiDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SystemIntegration from "./pages/services/SystemIntegration";
import ChatbotDevelopment from "./pages/services/ChatbotDevelopment";
import EcommerceSolutions from "./pages/services/EcommerceSolutions";
import GameDevelopment from "./pages/services/GameDevelopment";
import StreamingSolutions from "./pages/services/StreamingSolutions";
import BlockchainDevelopment from "./pages/services/BlockchainDevelopment";
import ProcessAutomation from "./pages/services/ProcessAutomation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/database-management" element={<DatabaseManagement />} />
          <Route path="/services/api-development" element={<ApiDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/system-integration" element={<SystemIntegration />} />
          <Route path="/services/chatbot-development" element={<ChatbotDevelopment />} />
          <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/services/game-development" element={<GameDevelopment />} />
          <Route path="/services/streaming-solutions" element={<StreamingSolutions />} />
          <Route path="/services/blockchain-development" element={<BlockchainDevelopment />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
