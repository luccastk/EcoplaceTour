import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import {
  About,
  Contact,
  Enterprises,
  Home,
  NotFound,
  Partnership,
} from "./pages";
import "./theme/global.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
    </BrowserRouter>
  );
}

export default App;
