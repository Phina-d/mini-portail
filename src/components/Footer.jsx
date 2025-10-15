import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* SECTION CONTACT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <FaMapMarkerAlt /> Mairie de Mboro, Thiès, Sénégal
          </p>
          <p>
            <FaPhoneAlt /> +221 33 955 79 52
          </p>
          <p>
            <FaEnvelope /> mairiemboro@gmail.com
          </p>
        </div>

        {/* SECTION LIENS UTILES */}
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><Link to="/services">Nos Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/actualites">Actualités</Link></li>
            <li><Link to="/apropos">À propos</Link></li>
            <li><Link to="/politique">Politique de confidentialité</Link></li>
            <li><Link to="/conditions">Conditions d’utilisation</Link></li>
          </ul>
        </div>

        {/* SECTION RÉSEAUX SOCIAUX */}
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/CommuneDeMboro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/p/Cvxd5zzIN_w/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@CommuneDeMboro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.google.com/maps/place/Mboro,+Sénégal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Localisation"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>
      </div>

     {/* SECTION BAS DE PAGE */}
<div className="footer-bottom">
  <p>© {new Date().getFullYear()} Commune de Mboro. Tous droits réservés.</p>
</div>

    </footer>
  );
}
