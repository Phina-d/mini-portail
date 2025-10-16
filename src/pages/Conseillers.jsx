import React from "react";
import "../styles/Conseillers.css";

const nomsConseillers = [
  "Abdallah TALL",
  "Aminata TOP",
  "TINE",
  "Scrigne Mor",
  "Mariétou SALL",
  "Babacar",
  "Jacqueline FAYE",
  "MBENGUE",
  "GUEYE",
  "Makhemoudane",
  "Ndeye",
  "Mansour DIEYE",
  "Aïssatou DIOP",
  "Papa Sanor SALL",
  "Thioro DIOP",
  "Alassane SENGHOR",
  "Amy THIAM",
  "Aliou LO",
  "Arame",
  "Papa Alioune",
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
  "Boubacar",
  "Binctou DIOP DIASSY",
  "Diassé MBOtJP",
  "Marnc Fama NDIAYE",
  "Ibrahima",
  "Yacine KANE DIENG",
  "Mor FAll NDIAYE",
  "Khoudia DIA",
  "Ibrahima BABOU",
  "Babacar DIEDHIOU",
  "Minata SOW",
  "Lassane DIOUF",
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

// ✅ Création des objets avec chemin image dynamique
const conseillersData = nomsConseillers.map((nom, i) => ({
  id: i + 1,
  nom,
  fonction: "Conseiller municipal",
  photo: `${import.meta.env.BASE_URL}images/elus/conseil1.jpg`, // ✅ compatible build + déploiement
}));

export default function Conseillers() {
  return (
    <div className="conseillers-page">
      {/* --- Bannière --- */}
      <div className="conseillers-banner">
        <img
          src={`${import.meta.env.BASE_URL}images/conseillers.jpg`}
          alt="Bannière Conseillers"
        />
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
