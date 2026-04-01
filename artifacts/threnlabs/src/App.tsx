import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ProductsPage from "@/pages/products";
import TechnologyPage from "@/pages/technology";
import ResearchPage from "@/pages/research";
import CompanyPage from "@/pages/company";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        {/* Products routes */}
        <Route path="/products" component={ProductsPage} />
        <Route path="/products/crtx" component={ProductsPage} />
        <Route path="/products/axon" component={ProductsPage} />
        <Route path="/products/synapse" component={ProductsPage} />
        <Route path="/products/cortex" component={ProductsPage} />
        {/* Other pages */}
        <Route path="/technology" component={TechnologyPage} />
        <Route path="/research" component={ResearchPage} />
        <Route path="/company" component={CompanyPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
