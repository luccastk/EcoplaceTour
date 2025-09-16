import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/layout";
import {
  AboutPage,
  BudgetPage,
  EducaPage,
  HomePage,
  PurposePage,
  TravelsPage,
} from "./components/pages";
import { ScrollToTop } from "./components/ScrollToTop";
import { cn } from "./lib/utils";
import UiStateStore from "./stores/ui-state.store";

function App() {
  const { isLoadingPage, setIsLoadingPage } = UiStateStore();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoadingPage(false), 2000);

    const handleLoad = () => {
      clearTimeout(timer);
      setIsLoadingPage(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, [setIsLoadingPage]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden">
        <div
          className={cn(
            "transition-all duration-800 ease-in-out",
            isLoadingPage ? "blur-sm opacity-0" : "opacity-100"
          )}
        >
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/purpose" element={<PurposePage />} />
              <Route path="/educa" element={<EducaPage />} />
              <Route path="/travel" element={<TravelsPage />} />
              <Route path="/budget" element={<BudgetPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
