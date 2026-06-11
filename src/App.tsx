import { Switch, Route, Redirect, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
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
import CosmosPage from "@/pages/products/cosmos";
import ScholarsAnchorPage from "@/pages/products/scholarsanchor";

const queryClient = new QueryClient();

function ScrollToHashAndTop() {
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        let attempts = 0;
        const tryScroll = () => {
          const element = document.getElementById(id);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          } else if (attempts < 10) {
            attempts++;
            setTimeout(tryScroll, 50);
          }
        };
        tryScroll();
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    handleScroll();
    window.addEventListener("hashchange", handleScroll);
    return () => window.removeEventListener("hashchange", handleScroll);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToHashAndTop />
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        {/* Products routes */}
        <Route path="/products" component={ProductsPage} />
        <Route path="/products/cosmos" component={CosmosPage} />
        <Route path="/products/scholarsanchor" component={ScholarsAnchorPage} />
        <Route path="/products/calendarsync">
          <Redirect to="/products/scholarsanchor" />
        </Route>
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
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

