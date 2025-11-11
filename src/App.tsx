import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Rotas } from "./routes/route";
import VLibras from '@djpfs/react-vlibras';




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
     {/* VLibras Widget */}
      <VLibras forceOnload={true} />
      <Toaster />
      <Sonner />
      <Rotas />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

