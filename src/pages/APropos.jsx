import React from "react";
import "../styles/APropos.css";

export default function APropos() {
  return (
    <section className="apropos">
      {/* 🔹 Bannière d’en-tête */}
      <div className="banner">
  <h1>À propos de la Commune de Mboro</h1>
          <p>Une commune dynamique, tournée vers l’avenir et le développement durable</p>
        </div>
      
      <div className="container">
        <h2>Historique de Mboro</h2>
        <p>
          Mboro est une petite ville côtière du nord-ouest du Sénégal, située sur la section du littoral appelée la Grande-Côte.
          Vers les années 1862–1863, les troupes de Pinet-Laprade, ancien gouverneur du Sénégal, remarquèrent le site qui ne comportait alors que quelques hameaux Peuls.
          En 1936, l’administration coloniale décida d’y installer une station agricole destinée à la production maraîchère et fruitière, et c’est alors que Mboro fut créée.
          Moyennant quelques avantages matériels, les populations du voisinage furent incitées à venir s’y établir.
        </p>
        <p>
          La localité a été érigée en commune en 2002. Elle est rattachée au département de Tivaouane dans la région de Thiès.
          La ville est située à 25 km à l’Ouest de Tivaouane et à 117 km au Nord de Dakar. Le paysage est celui des dunes de sable fin et clair, les Niayes.
        </p>

        <h2>Objectifs de la Commune</h2>
        <ul>
          <li>
            <strong>Extension du périmètre communal :</strong> La commune cherche à obtenir de l'aide de l'État pour étendre son territoire et disposer de plus d'espace pour ses projets de développement futurs.
          </li>
          <li>
            <strong>Renforcement des compétences :</strong> Relever les niveaux d'éducation et renforcer les compétences techniques et professionnelles des bénéficiaires.
          </li>
          <li>
            <strong>Développement de l’Incubateur de Mboro :</strong> Former des jeunes dans les métiers liés à l’irrigation, la production maraîchère, l’élevage, le biogaz et les bio-engrais.
          </li>
          <li>
            <strong>Renforcement des capacités de revenus :</strong> Aider les bénéficiaires à générer des revenus durables grâce à la formation et à l’appui à l’entrepreneuriat.
          </li>
        </ul>

        <h2>Missions de la Commune</h2>
        <ul>
          <li>
            <strong>Amélioration des infrastructures :</strong> Réhabilitation des réseaux d’eau potable et d’assainissement, notamment dans les postes de santé.
          </li>
          <li>
            <strong>Eau et assainissement :</strong> Création de forages, rénovation des toilettes, et mise en place de systèmes de stockage d’eau.
          </li>
          <li>
            <strong>Gestion foncière :</strong> Extension du périmètre communal pour favoriser les projets futurs.
          </li>
          <li>
            <strong>Développement économique local :</strong> Soutien à l’installation d’entreprises et à la création d’emplois locaux.
          </li>
          <li>
            <strong>Affaires sociales :</strong> Appui aux services communautaires tels que les crèches, les structures d’aide et les projets de jeunesse.
          </li>
        </ul>

        <div className="mission-vision">
          <div className="card">
            <h3>Notre Mission</h3>
            <p>
              Offrir un service public efficace, participatif et respectueux des valeurs de bonne gouvernance.
            </p>
          </div>
          <div className="card">
            <h3>Notre Vision</h3>
            <p>
              Faire de Mboro une commune moderne, écologique et prospère, au service de tous ses habitants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
