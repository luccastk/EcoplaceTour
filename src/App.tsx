import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import {
  About,
  Contact,
  Enterprises,
  Home,
  NotFound,
  Partnership,
} from "./pages";
import "./theme/global.css";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enterprises" element={<Enterprises />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
