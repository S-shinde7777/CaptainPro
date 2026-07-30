import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Captain from "./pages/Captain/Captain";
import Menu from "./pages/Captain/Menu";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

       <Route path="/captain" element={<Captain />} />

       <Route path="/menu/:tableId" element={<Menu />} />


    </Routes>
  );
}

export default App;