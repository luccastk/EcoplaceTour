import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Enterprises,
  Home,
  NotFound,
  Partnership,
} from "./pages";
import "./theme/global.css";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enterprises" element={<Enterprises />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
