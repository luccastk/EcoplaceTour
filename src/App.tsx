import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/layout";
import { cn } from "./lib/utils";
import { AboutUs, Home, Purpose } from "./pages";
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
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/purpose" element={<Purpose />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
