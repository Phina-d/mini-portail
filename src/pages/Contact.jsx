import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Votre message a bien été envoyé !");
    setFormData({ nom: "", email: "", message: "" });
  };

  return (
     <>
      {/* ✅ Bannière animée */}
      <div className="banner-contact">
        <div className="overlay">
          <h1>Contactez la Commune de Mboro</h1>
          <p>Une question, une demande ou un partenariat ? Écrivez-nous !</p>
        </div>
      </div>
    <section className="contact">
      <div className="contact-container">
        <h1>Contactez-nous</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            Envoyer
          </button>
        </form>

        <div className="contact-info">
          <h2>📍 Coordonnées</h2>
          <p>Hôtel de Ville, MBORO</p>
          <p>☎️ 33 955 79 52</p>
          <p>✉️ mairiemboro@gmail.com</p>
        </div>
      </div>

      {/* ✅ Intégration de la carte Google Maps */}
      <div className="map-container">
        <iframe
          title="Carte de Mboro"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15438.37266575893!2d-17.0712!3d15.1533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec112b5a31cf6f7%3A0x735fe556fd4ac1b!2sMboro!5e0!3m2!1sfr!2ssn!4v1699811330000!5m2!1sfr!2ssn"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px", marginTop: "30px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    </>
  );
}
