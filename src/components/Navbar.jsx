import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* --- Logo + Titre --- */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo Commune de Mboro" className="logo-img" />
          <h1 className="logo-text">Commune de MBORO</h1>
        </div>

        {/* --- Icône hamburger --- */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* --- Liens de navigation --- */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/actualites" onClick={closeMenu}>Actualités</Link></li>
          <li><Link to="/legislation">Législation</Link></li>
          <li><Link to="/apropos" onClick={closeMenu}>À propos</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/demande-terrain" onClick={closeMenu} className="highlight-link">Nouvelle demande</Link></li>
        </ul>
      </div>
    </nav>
  );
}
