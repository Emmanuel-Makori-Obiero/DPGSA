import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/site/SiteLayout";
import { siteRoutes } from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      {siteRoutes.map(route => {
        const Page = route.component;
        const RoutedPage = () => (
          <SiteLayout currentPath={route.path}>
            <Page />
          </SiteLayout>
        );
        return (
          <Route key={route.path} path={route.path} component={RoutedPage} />
        );
      })}
      <Route
        component={() => (
          <SiteLayout currentPath="">
            <NotFound />
          </SiteLayout>
        )}
      />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
