import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styles/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const bgUrl = `${import.meta.env.BASE_URL}images/mboro.jpg`;

  const services = [
    "Services Municipaux",
    "Urbanisme",
    "Environnement",
    "Éducation",
    "Culture",
  ];

  const projets = [
    {
      id: 1,
      titre: "Réhabilitation de l'Hôtel de Ville",
      desc: "Modernisation complète du bâtiment administratif pour un meilleur accueil des citoyens.",
      image: `${import.meta.env.BASE_URL}images/projet-hotel-ville.jpg`,
    },
    {
      id: 2,
      titre: "Programme d'assainissement de Mboro",
      desc: "Projet visant à améliorer le cadre de vie et la salubrité publique.",
      image: `${import.meta.env.BASE_URL}images/projet-assainissement.jpg`,
    },
    {
      id: 3,
      titre: "Construction d'une nouvelle école primaire",
      desc: "Offrir aux enfants de Mboro un cadre d’apprentissage moderne et agréable.",
      image: `${import.meta.env.BASE_URL}images/projet-ecole.jpg`,
    },
  ];

  // ✅ Paramètres optimisés du slider
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // pas d’arrêt entre les slides
    speed: 6000, // vitesse lente et fluide
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablettes
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // téléphones
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay">
        {/* HERO */}
        <div className="hero">
          <h2>Bienvenue sur le portail de la Commune de MBORO</h2>
          <p>Un espace moderne, transparent et au service des citoyens.</p>

          <div className="hero-buttons">
            <Link to="/services" className="cta-btn">
              Découvrir nos services
            </Link>
            <Link to="/programmes" className="cta-btn">
              Voir nos programmes
            </Link>
            <Link to="/conseillers" className="cta-btn">
              Voir les conseillers
            </Link>
            <Link to="/elus-locaux" className="cta-btn">
              Voir les délégués
            </Link>
          </div>
        </div>

        {/* SECTION MAIRE */}
        <section className="maire-section">
          <div className="maire-container">
            <img
              src={`${import.meta.env.BASE_URL}images/maire-mboro.jpg`}
              alt="Maire de la commune de Mboro"
              className="maire-photo"
            />
            <div className="maire-text">
              <h2>Monsieur le Maire de Mboro</h2>
              <p>
                <strong>Monsieur Abdallah Tall</strong>, Maire de la commune de
                Mboro, œuvre chaque jour pour le développement harmonieux de la
                ville, la modernisation des services municipaux et le bien-être
                des habitants. Son engagement repose sur la transparence, la
                proximité et la participation citoyenne.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION PROJETS */}
        <section className="projets-section">
          <h2>Nos projets en cours</h2>
          <div className="projets-grid">
            {projets.map((projet) => (
              <div key={projet.id} className="projet-card">
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="projet-img"
                />
                <h3>{projet.titre}</h3>
                <p>{projet.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ BANDE DÉFILANTE FLUIDE */}
        <section className="slider-section">
          <h2 className="slider-title">Nos domaines d’intervention</h2>
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="slide-item">
                <h3>{service}</h3>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </section>
  );
}
