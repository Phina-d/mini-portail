import React from "react";
import { Link } from "react-router-dom";
import "../styles/Actualites.css";

export default function Actualites() {
  const news = [
 
    {
      id: 3,
      title: "Projet d’implantation d’une Caserne des Sapeurs-Pompiers à Mboro : une avancée majeure pour la sécurité des populations",
      date: "Vendredi 4 juillet 2025",
      desc: `Suite à une correspondance adressée par le Maire Abdallah Tall au Général de Brigade, Commandant de la Brigade nationale des Sapeurs-Pompiers, la commune de Mboro a eu l’honneur d’accueillir une mission d’inspection de la Brigade départementale de Tivaouane.👨‍🚒👩‍🚒`,
      content: `La mission dressera un rapport à l’attention de sa hiérarchie. La municipalité, portée par une forte volonté de renforcement de la sécurité civile 🦺, espère un retour favorable pour la concrétisation rapide de ce projet structurant.
Monsieur le Maire Abdallah Tall tient à adresser ses sincères remerciements à toutes les personnes qui ont contribué à la facilitation de cette démarche au service des populations.
Vitale TV Mboro – S.O.S Mboro – FM 101.6 Radio Niayes FM.`,
    },
    {
      id: 4,
      title: "Tragédie à Mboro : un camion percute trois enfants, un mort et deux blessés",
      date: "Mercredi 8 octobre 2025 à 11h24",
      desc: `Un drame s’est produit mardi soir à Mboro lorsqu’un camion a renversé trois enfants. Un garçon est décédé et deux jeunes filles ont été blessées.`,
      content: `Un drame s’est produit mardi soir à Mboro, lorsqu’un camion a renversé trois enfants installés devant leur maison. 
      L’accident, survenu vers 20h50 dans le quartier de Mboro 3, a provoqué la mort d’un garçon âgé de 18 mois et blessé deux jeunes filles de 11 et 16 ans.
      D’après les premiers témoignages recueillis sur place, le véhicule, chargé de marchandises, aurait connu une panne mécanique ayant entraîné la perte de contrôle du conducteur. 
      Sous la violence de l’impact, le plus jeune des enfants a succombé à ses blessures.
      Les deux autres victimes ont été prises en charge d’abord au district sanitaire de Mboro 1 avant d’être transférées à l’hôpital Mame Abdou Aziz Sy Dabakh de Tivaouane pour des soins complémentaires.
      Informée du drame, la brigade de gendarmerie de Mboro s’est immédiatement rendue sur les lieux et a ouvert une enquête afin d’élucider les circonstances exactes de l’accident.`,
    },
    {
      id: 5,
      title: "Problèmes fonciers à Mboro : un frein au développement communal",
      date: "juin 2025",
      desc: `La commune de Mboro fait face à un manque criant d’espace pour son développement et l’extension de son périmètre communal, impactant directement les projets publics et l’économie locale.`,
    },
    {
      id: 6,
      title: "🚨 Projet Environnemental : Mboro Ville Verte 🌱",
      date: " octobre 2025",
       desc: `La commune de Mboro s'engage résolument dans une politique de protection de l’environnement avec le projet **« Mboro Ville Verte »**, une initiative écologique ambitieuse menée par l’**Association Jeunesse Solidaire de Mboro (AJSM)**. Une initiative écologique soutenue par la commune de Mboro.`,
      content: ` La commune de Mboro s'engage résolument dans une politique de protection de l’environnement avec le projet **« Mboro Ville Verte »**, une initiative écologique ambitieuse menée par l’**Association Jeunesse Solidaire de Mboro (AJSM)**. `,

    },
  {
      id: 7,
      title: "🎥 Le maire de Mboro appelle à l’aide pour l’extension du périmètre communal",
      date: " octobre 2024",
       desc: `Le maire de Mboro, Abdallah Tall, appelle les nouvelles autorités à soutenir la commune dans son projet d’extension du périmètre communal. 
  Il souligne que l’étroitesse actuelle, notamment du marché et de la gare routière, combinée à la traversée quotidienne de camions, représente un danger pour les habitants..`,
      content: ` Le maire de Mboro, Abdallah Tall, appelle les nouvelles autorités à soutenir la commune dans son projet d’extension du périmètre communal. 
  Il souligne que l’étroitesse actuelle, notamment du marché et de la gare routière, combinée à la traversée quotidienne de camions, représente un danger pour les habitants.. `,

    },
     {
  id: 8,
  title: "📚 𝐑𝐞𝐧𝐭𝐫𝐞́𝐞 𝐬𝐜𝐨𝐥𝐚𝐢𝐫𝐞 𝟐𝟎𝟐𝟓-𝟐𝟎𝟐𝟔 : 𝐯𝐢𝐬𝐢𝐭𝐞 𝐝𝐞𝐬 𝐞́𝐭𝐚𝐛𝐥𝐢𝐬𝐬𝐞𝐦𝐞𝐧𝐭𝐬 𝐬𝐜𝐨𝐥𝐚𝐢𝐫𝐞𝐬 𝐝𝐞 𝐌𝐛𝐨𝐫𝐨",
  date: "8 octobre 2025",
  image: "/images/actualites/mboro5.jpg",
  desc: `Ce mercredi 08 octobre 2025 marque la reprise officielle des cours pour l’année scolaire 2025-2026. 
L’Adjoint au Sous-préfet de Méouane a visité le lycée de Mboro, le CEM Mboro 1 et plusieurs écoles primaires pour constater l’effectivité de la rentrée.`,
  content: `Ce mercredi 08 octobre 2025 marque la reprise officielle des cours pour l’année scolaire 2025-2026.
À cette occasion, l’Adjoint au Sous-préfet de Méouane a effectué une visite de terrain au lycée de Mboro, au CEM Mboro 1 ainsi que dans plusieurs écoles primaires de la commune, afin de constater l’effectivité de la rentrée.
Il était accompagné de M. Lamine Diakité, Adjoint au Maire, et de M. Ibrahima Camara, Président de la Commission Éducation.
Le Sous-préfet a salué le bon déroulement de la rentrée et félicité la municipalité pour ses efforts en faveur de l’éducation.`,
},

{
  id: 9,
  title: "📖 𝐅𝐢𝐧𝐚𝐥𝐞𝐬 𝐝𝐮 𝐜𝐨𝐧𝐜𝐨𝐮𝐫𝐬 𝐝𝐞 𝐝𝐢𝐜𝐭𝐞́𝐞 𝐞𝐭 𝐝𝐮 𝐭𝐨𝐮𝐫𝐧𝐨𝐢 𝐝𝐞 𝐬𝐜𝐫𝐚𝐛𝐛𝐥𝐞 𝐚̀ 𝐌𝐛𝐨𝐫𝐨",
  date: "4 octobre 2025",
  image: "/images/actualites/mboro7.jpg",
  desc: `Le Centre socio-éducatif ElHadji Ngalgou Ndiaye a accueilli la finale du concours de dictée et du tournoi de scrabble. Un événement culturel majeur soutenu par la Mairie de Mboro.`,
  content: `Le Centre Socio-éducatif et Culturel ElHadji Ngalgou Ndiaye a accueilli ce samedi 04 octobre les finales du concours de dictée et du tournoi de scrabble organisés par la zone Navétanes de Mboro.
M. Lamine Diakité, Adjoint au Maire, a honoré de sa présence la cérémonie pour encourager les participants et affirmer le soutien de la municipalité aux initiatives culturelles et éducatives.
Cet événement promeut les activités intellectuelles et contribue à faire du centre un véritable espace d’épanouissement pour la jeunesse.`,
},

{
  id: 10,
  title: "🛣️ 𝐑𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐞𝐧𝐭𝐫𝐞 𝐥𝐞 𝐛𝐮𝐫𝐞𝐚𝐮 𝐦𝐮𝐧𝐢𝐜𝐢𝐩𝐚𝐥 𝐞𝐭 𝐥𝐞 𝐃𝐆 𝐝𝐞 𝐥’𝐀𝐠𝐞𝐫𝐨𝐮𝐭𝐞",
  date: "2 octobre 2025",
  image: "/images/actualites/mboro8.jpg",
  desc: `Le Maire Abdallah Tall et son équipe ont rencontré le Directeur Général de l’Ageroute pour discuter des infrastructures routières de Mboro.`,
  content: `Le jeudi 02 octobre, une délégation du bureau municipal, conduite par le Maire Abdallah Tall, s’est rendue à Dakar pour rencontrer M. Mamadou Ndao, Directeur Général de l’Ageroute.
Les échanges ont porté sur l’état d’avancement des travaux de la route principale traversant Mboro et sur les projets à venir pour renforcer les infrastructures et soutenir le développement durable.`,
},

{
  id: 11,
  title: "📚 𝐃𝐞́𝐝𝐢𝐜𝐚𝐜𝐞 𝐝𝐞 𝐥’𝐨𝐮𝐯𝐫𝐚𝐠𝐞 𝐄𝐂𝐋𝐀𝐓 : 𝐋𝐚 𝐥𝐮𝐦𝐢𝐞̀𝐫𝐞 𝐢𝐧𝐜𝐥𝐮𝐬𝐢𝐯𝐞",
  date: "30 septembre 2025",
  image: "/images/actualites/mboro9.jpg",
  desc: `Le Maire Abdallah Tall a reçu M. Mansour Dème, auteur de “ECLAT : La lumière inclusive”, un ouvrage valorisant l’éducation inclusive à Mboro.`,
  content: `Le Maire, M. Abdallah Tall, accompagné de ses collaborateurs, a reçu M. Mansour Dème, auteur du livre “ECLAT : La lumière inclusive”.
Cet ouvrage met en avant la question de l’éducation inclusive et le projet ECLAT mis en œuvre à Mboro.
Le Maire a félicité l’auteur pour sa contribution en faveur de l’inclusion et de l’égalité des chances.`,
},

{
  id: 12,
  title: "🎓 𝐄́𝐭𝐮𝐝𝐢𝐚𝐧𝐭𝐬 𝐛𝐞́𝐧𝐞́𝐯𝐨𝐥𝐞𝐬 𝐚𝐮 𝐬𝐞𝐫𝐯𝐢𝐜𝐞 𝐝𝐞 𝐥’𝐞́𝐭𝐚𝐭 𝐜𝐢𝐯𝐢𝐥 𝐝𝐞 𝐌𝐛𝐨𝐫𝐨",
  date: "28 septembre 2025",
  image: "/images/actualites/mboro10.jpg",
  desc: `Des étudiants de Mboro ont participé à la transcription des actes à l’état civil durant les vacances, un bel exemple de citoyenneté.`,
  content: `Durant les vacances scolaires, des étudiants bénévoles de l’Amicale des étudiants de Mboro ont aidé le service de l’état civil de la mairie.
Le Maire Abdallah Tall et l’adjoint Lamine Diakité les ont félicités pour leur engagement citoyen et leur dévouement au service de la communauté.`,
},

{
  id: 13,
  title: "🎀 𝐂𝐚𝐦𝐩𝐚𝐠𝐧𝐞 𝐝𝐞 𝐬𝐞𝐧𝐬𝐢𝐛𝐢𝐥𝐢𝐬𝐚𝐭𝐢𝐨𝐧 𝐜𝐨𝐧𝐭𝐫𝐞 𝐥𝐞 𝐜𝐚𝐧𝐜𝐞𝐫 𝐝𝐮 𝐬𝐞𝐢𝐧",
  date: "25 septembre 2025",
  image: "/images/actualites/mboro11.jpg",
  desc: `La Commune de Mboro sensibilise contre le cancer du sein sous le slogan : “Unissons nos forces pour agir et sauver des vies.”`,
  content: `Unissons nos forces pour sensibiliser, soutenir et agir contre le cancer du sein.
Chaque geste compte : la prévention, le dépistage précoce et la solidarité sauvent des vies.
La Mairie de Mboro s’engage aux côtés des femmes pour la santé et le bien-être de la communauté.`,
},
{
  id: 14,
  title: "🟢 Réception de projecteurs pour le stade municipal de Mboro",
  date: "29 septembre 2025",
  image: "/images/actualites/mboro13.jpg",
  desc: `La zone Navétanes de Mboro a réceptionné, ce lundi 29 septembre, un lot de projecteurs destinés à l’éclairage du stade municipal. 🎁 Ce don de grande importance est offert par M. Abdoulaye Ndiaye Ngalgou, Président du mouvement And Defar, un homme engagé et soucieux du développement de son terroir.”`,
  content: `🎁 Ce don de grande importance est offert par M. Abdoulaye Ndiaye Ngalgou, Président du mouvement And Defar, un homme engagé et soucieux du développement de son terroir.`,
},
  ];

  return (
    <>
{/* === Bannière === */}
<div className="banner-actualites">
  <h1>Actualités & Communiqués</h1>
  <p>Découvrez les dernières nouvelles de la commune de Mboro</p>
</div>



      {/* === Section des actualités === */}
      <section className="actualites">
        <div className="news-grid">
          {news.map((n) => (
            <article key={n.id} className="card">
              <h2>{n.title}</h2>
              <p className="date">{n.date}</p>
              <p>{n.desc}</p>
              <Link to={`/actualites/${n.id}`} className="read-more">
                Lire la suite →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}