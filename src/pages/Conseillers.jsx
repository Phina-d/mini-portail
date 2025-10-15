import React from "react";
import "../styles/Conseillers.css";

const nomsConseillers = [
  "Abdallah TALL",
  "Aminata TOP",
  "Scrigne Mor TINE",
  "Mariétou SALL",
  "Babacar BA",
  "Jacqueline FAYE",
  "Makhemoudane MBENGUE",
  "Ndeye GUEYE",
  "Mansour DIEYE",
  "Aïssatou DIOP",
  "Papa Sanor SALL",
  "Thioro DIOP",
  "Alassane SENGHOR",
  "Amy THIAM",
  "Aliou LO",
  "Arame KA",
  "Papa Alioune BA",
  "Ndoumbé WATHE",
  "Mamadou SOUMARE",
  "Magatte NDIAYE",
  "Massamba GNING",
  "Cécile BASSENE",
  "Ousseynou SAMB",
  "Bineta NDIAYE",
  "El Hadji Oumar WANE",
  "Lamine DIAKITE",
  "Awa NDAO",
  "Saliou KARE",
  "Fatimata A. DIALLO",
  "Ibrahima CAMARA",
  "Ndeye Ami DIENG",
  "Aboubacar DIASSY",
  "Binetou DIOP",
  "Diassé MBOUP",
  "Mame Fama NDIAYE",
  "Ibrahima KANE",
  "Yacine DIENG",
  "Mor FAll NDIAYE",
  "Khoudia DIA",
  "Ibrahima BABOU",
  "Babacar DIEDHIOU",
  "Aminata SOW",
  "Alassane DIOUF",
  "Ndiassé SALL",
  "Olivier MBENGUE",
  "Edmée DIOUF",
  "Issa SOW",
  "Fanta Maîmouna CISSOKHO",
  "Khady SARR",
  "Daouda Ben Babacar DIEYE",
  "Ndeye Astou DIAGNE",
  "Massamba NDAO",
  "Ndeye Sokhna GADIAGA",
  "Samba Khary KANE",
  "Cheikh Tidiane MBAYE",
  "Abdoulaye CISSE",
];

const conseillersData = nomsConseillers.map((nom, i) => ({
  id: i + 1,
  nom,
  fonction: "Conseiller municipal",
  photo: `/images/elus/conseil1.jpg`, // même photo pour tous
}));

export default function Conseillers() {
  return (
    <div className="conseillers-page">
      {/* --- Bannière --- */}
      <div className="conseillers-banner">
        <img src="/images/conseillers.jpg" alt="Bannière Conseillers" />
        <div className="banner-overlay"></div>
        <h1>Nos Conseillers Municipaux</h1>
      </div>

      {/* --- Grille des conseillers --- */}
      <div className="conseillers-grid">
        {conseillersData.map((c) => (
          <div key={c.id} className="conseiller-card">
            <img src={c.photo} alt={c.nom} />
            <h3>{c.nom}</h3>
            <p>{c.fonction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}