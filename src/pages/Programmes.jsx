import React, { useState } from "react";
import "../styles/Programmes.css";

export default function Programmes() {
  const [openIndex, setOpenIndex] = useState(null);

  const programmes = [
    {
      id: 1,
      title: "Programme d’assainissement et d’environnement",
      desc: "Amélioration du cadre de vie et de la salubrité publique.",
      details: "Ce programme inclut la gestion durable des déchets, le curage des caniveaux, la sensibilisation à l’hygiène et la reforestation urbaine.",
      image: "/images/programmes/environnement.jpg",
    },
    {
      id: 2,
      title: "Programme d’éducation et de formation",
      desc: "Soutenir l’excellence scolaire et la formation des jeunes.",
      details: "Distribution de fournitures, bourses d’études, réhabilitation d’écoles et création de centres de formation technique.",
      image: "/images/programmes/education.jpg",
    },
    {
      id: 3,
      title: "Programme de développement économique local",
      desc: "Encourager l’entrepreneuriat et l’emploi local.",
      details: "Appui aux GIE, accompagnement des jeunes entrepreneurs, création de marchés et valorisation des produits locaux.",
      image: "/images/programmes/economie.jpg",
    },
  ];

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="programmes">
      <div className="banner-programmes">
        <h1>Nos Programmes Communaux</h1>
        <p>Découvrez les grands axes de développement de la commune de Mboro</p>
      </div>

      <div className="programmes-container">
        {programmes.map((p, index) => (
          <div key={p.id} className="programme-card">
            <img src={p.image} alt={p.title} />
            <h2>{p.title}</h2>
            <p>{p.desc}</p>

            {openIndex === index && (
              <div className="programme-details">
                <p>{p.details}</p>
              </div>
            )}

            <button className="btn-voir-plus" onClick={() => toggleDetails(index)}>
              {openIndex === index ? "Voir moins ▲" : "Voir plus ▼"}
            </button>
          </div>
        ))}
      </div>
    

      {/* 📆 Section calendrier */}
      <div className="calendar-section">
        <h2>🗓️ Prochains événements</h2>
        <ul>
          <li>
            <strong>15 Octobre 2025 :</strong> Journée de reboisement communal 🌳
          </li>
          <li>
            <strong>10 Novembre 2025 :</strong> Atelier sur la gouvernance locale 🤝
          </li>
          <li>
            <strong>5 Décembre 2025 :</strong> Fête de la citoyenneté 🏅
          </li>
        </ul>
      </div>
    </section>
  );
}
