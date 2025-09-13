import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components/ui";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
