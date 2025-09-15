import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout";
import { Home } from "./pages";

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
