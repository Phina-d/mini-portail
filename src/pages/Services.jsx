import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      title: "État civil",
      desc: "Actes de naissance, mariage, décès, certificats et autres documents administratifs.",
      icon: "📄",
       link: "/etat-civil",
    },
    {
      title: "Urbanisme",
      desc: "Dépôt et suivi des demandes de permis de construire ou d’aménagement.",
      icon: "🏗️",
    },
    {
      title: "Finances locales",
      desc: "Gestion des taxes, redevances et budget communal.",
      icon: "💰",
    },
    {
      title: "Environnement",
      desc: "Assainissement, gestion des déchets, campagnes de reboisement.",
      icon: "🌳",
    },
    {
      title: "Développement local",
      desc: "Projets économiques, emploi des jeunes et initiatives communautaires.",
      icon: "🤝",
    },
  ];

  return (
    <section className="services">
      <div className="banner-services">
        <div className="overlay">
          <h1>Les Services de la Commune de Mboro</h1>
          <p>Des actions concrètes au service des citoyens et du développement local</p>
        </div>
      </div>

      <div className="container">
        <h2>Présentation générale</h2>
        <p>
          Les services de la commune de <strong>Mboro</strong> au Sénégal comprennent les
          compétences traditionnelles d'une municipalité en matière d'administration
          (gestion du personnel, des élections), de police locale, de gestion du domaine
          public, et de services essentiels pour la population. Des exemples de services
          spécifiques incluent l'eau et l'assainissement, ainsi que l'organisation de
          cérémonies patriotiques.
        </p>

        <h2>Services administratifs et de gestion</h2>
        <ul>
          <li>
            <strong>Gestion communale :</strong> Le maire est responsable de
            l'administration locale et de la mise en œuvre des lois et règlements sur le
            territoire communal.
          </li>
          <li>
            <strong>Personnel municipal :</strong> Le maire nomme un secrétaire général
            qui supervise le personnel municipal et assiste aux réunions du bureau communal.
          </li>
          <li>
            <strong>Organisation des élections :</strong> Le maire est chargé de
            l'organisation des élections et de la gestion des listes électorales.
          </li>
        </ul>

        <h2>Services publics et infrastructures</h2>
        <ul>
          <li>
            <strong>Eau et assainissement :</strong> La commune est engagée dans des projets
            visant à améliorer le réseau d’eau potable et l’évacuation des eaux usées,
            notamment à travers des actions de réhabilitation dans plusieurs postes de santé.
          </li>
          <li>
            <strong>Police et sécurité :</strong> Le maire exerce son pouvoir de police sur
            les domaines public et privé de la commune, et veille à la sécurité des habitants.
          </li>
        </ul>

        <h2>Autres responsabilités</h2>
        <ul>
          <li>
            <strong>Cérémonies patriotiques :</strong> La commune organise les cérémonies
            officielles et patriotiques sur son territoire.
          </li>
          <li>
            <strong>Représentation de l'État :</strong> Le maire, en tant que représentant
            de l'État, veille à la publication et à l’exécution des lois et règlements.
          </li>
        </ul>

        <h2>Nos principaux services</h2>
        <div className="service-grid">
          {services.map((s, i) => (
  <div key={i} className="service-card">
    <div className="icon">{s.icon}</div>
    <h3>{s.title}</h3>
    <p>{s.desc}</p>
    {s.title === "État civil" && (
      <Link to="/etat-civil" className="btn-service">Faire une demande</Link>
    )}
  </div>
))}

        </div>
      </div>
    </section>
  );
  
}

