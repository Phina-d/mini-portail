import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Programmes from "./pages/Programmes";
import ElusLocaux from "./pages/ElusLocaux";
import Actualites from "./pages/Actualites";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import DemandeTerrain from "./pages/DemandeTerrain";
import Politique from "./pages/Politique";
import Conditions from "./pages/Conditions";
import EtatCivilForm from "./pages/EtatCivilForm";
import ActualiteDetail from "./pages/ActualiteDetail"; // 👈 
import Faq from "./pages/Faq";
import Legislation from "./pages/Legislation";
import Conseillers from "./pages/Conseillers";
import { FaSun, FaMoon, FaArrowUp } from "react-icons/fa";
import "./styles/App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    // applique sur <html>
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    // debug
    console.log("theme appliqué:", theme);
    console.log("html data-theme =", document.documentElement.getAttribute("data-theme"));
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Router basename={import.meta.env.DEV ? "/" : "/mini-portail"}>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/elus-locaux" element={<ElusLocaux />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demande-terrain" element={<DemandeTerrain />} />
            <Route path="/politique" element={<Politique />} />
            <Route path="/etat-civil" element={<EtatCivilForm />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/legislation" element={<Legislation />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/conseillers" element={<Conseillers />} />
            <Route path="/actualites/:id" element={<ActualiteDetail />} /> {/* 👈 nouveau */}
          </Routes>
        </main>
        <Footer />

        <button className="theme-toggle" onClick={toggleTheme} aria-label="changer thème">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {showScroll && (
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="haut">
            <FaArrowUp />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
