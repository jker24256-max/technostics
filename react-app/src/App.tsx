import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import FreeScan from "./pages/FreeScan";
import About from "./pages/About";
import { Contact } from "lucide-react";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/free-scan" element={<FreeScan />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
