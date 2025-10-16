import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Actualites.css";
import "../styles/ActualiteDetail.css";

const getUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

export default function ActualiteDetail() {
  const { id } = useParams();

  const news = [
    {
      id: 1,
      title: "Lancement du nouveau portail",
      date: "7 octobre 2025",
      content: `Un espace numérique pour moderniser les services administratifs.`,
    },
    {
      id: 2,
      title: "Campagne de reboisement",
      date: "15 septembre 2025",
      desc: "",
      content: `Une initiative écologique soutenue par la commune de Mboro.`,
    },
    {
  id: 3,
  title: "Projet d’implantation d’une Caserne des Sapeurs-Pompiers à Mboro : une avancée majeure pour la sécurité des populations",
  image: "/images/actualites/sapeur.jpg", 
  date: "Vendredi 4 juillet 2025",
  content: ` <p>Suite à une correspondance adressée par le Maire Abdallah Tall au Général de Brigade, Commandant de la Brigade nationale des Sapeurs-Pompiers, la commune de Mboro a eu l’honneur d’accueillir une mission d’inspection de la Brigade départementale de Tivaouane.

Cette visite de prospection avait pour objectif d’évaluer le site proposé pour l’implantation d’une future caserne destinée à renforcer le dispositif de secours à Mboro et dans les communes environnantes. 

Le site identifié se trouve à Mboro 8 (Mbaye Mbayepeulh) et présente un fort potentiel pour accueillir une infrastructure adaptée aux besoins du territoire. 👨‍🚒👩‍🚒

La mission dressera un rapport à l’attention de sa hiérarchie. La municipalité, portée par une forte volonté de renforcement de la sécurité civile 🦺, espère un retour favorable pour la concrétisation rapide de ce projet structurant.

Monsieur le Maire Abdallah Tall tient à adresser ses sincères remerciements à toutes les personnes qui ont contribué à la facilitation de cette démarche au service des populations.

Vitale TV Mboro – S.O.S Mboro – FM 101.6 Radio Niayes FM.</p>`,
},

    {
      id: 4,
      title: "Tragédie à Mboro : un camion percute trois enfants, un mort et deux blessés",
      date: "Mercredi 8 octobre 2025 à 11h24",
      image: "/images/actualites/mboro3.jpg",
      content: `
        <p>Un drame s’est produit mardi soir à Mboro, lorsqu’un camion a renversé trois enfants installés devant leur maison.</p> 
        <p>L’accident, survenu vers 20h50 dans le quartier de Mboro 3, a provoqué la mort d’un garçon âgé de 18 mois et blessé deux jeunes filles de 11 et 16 ans.</p>
        <p>D’après les premiers témoignages recueillis sur place, le véhicule, chargé de marchandises, aurait connu une panne mécanique ayant entraîné la perte de contrôle du conducteur.</p> 
         <p>Sous la violence de l’impact, le plus jeune des enfants a succombé à ses blessures.</p>
        <p>Les deux autres victimes ont été prises en charge d’abord au district sanitaire de Mboro 1 avant d’être transférées à l’hôpital Mame Abdou Aziz Sy Dabakh de Tivaouane pour des soins complémentaires.
        Informée du drame, la brigade de gendarmerie de Mboro s’est immédiatement rendue sur les lieux et a ouvert une enquête afin d’élucider les circonstances exactes de l’accident.</p>
      `,
    },
    {
      id: 5,
      title: "Problèmes fonciers à Mboro : un frein au développement communal",
      date: "juin 2025",
      image: "/images/actualites/mboro.jpg",
      content: `
        La commune de Mboro fait face à des problèmes fonciers liés au manque d'espace pour son développement, notamment pour la réalisation de projets futurs et l'extension du périmètre communal, comme l'a souligné le maire en 2024.</p>
        <p>Les marchés publics, qui nécessitent des terrains pour leur réalisation (comme un marché moderne), sont donc directement impactés par ce manque d'espace, restreignant la capacité de la commune à satisfaire les besoins croissants de sa population et à développer l'économie locale.</p>
        <p>📍 **Problèmes fonciers à Mboro**</p>
        -<p> **Manque d'espace pour le développement :** La commune de Mboro manque cruellement d'espace pour accueillir de nouveaux projets de développement, ce qui limite son expansion et son développement économique.  
        - **Urbanisation et croissance démographique :** La forte augmentation de la population, passée de 12 000 à près de 30 000 habitants en 2013, accentue la pression foncière et rend la gestion de l'espace de plus en plus complexe.  
        - **Attente de l'État :** Le maire a lancé un appel à l'État pour aider à l’extension du périmètre communal, afin de permettre à Mboro de disposer de plus d'espace pour ses projets</p>
        <p>**Lien avec les marchés publics**</p>
        <p>**Nécessité de terrains :** Les marchés publics, en particulier un marché moderne comme celui réclamé par la plateforme locale, nécessitent un espace physique pour être construits et fonctionner.  
        - **Impact du manque d'espace :** Le manque d'espace disponible limite la possibilité de développer des infrastructures et d'organiser les activités économiques, même dans des zones où la présence d'entreprises est forte.</p> 
        <p>🌍 **Solutions et perspectives**</p>
        <p>**Extension du périmètre communal :** Une solution clé pour répondre aux besoins de développement et de projets futurs. 
        - **Planification territoriale :** Une gestion des ressources foncières efficace est nécessaire pour garantir un développement harmonieux de Mboro.  
        - **Soutien de l'État :** Le soutien de l'État sénégalais est crucial pour aider la commune à surmonter ses difficultés foncières et concrétiser ses projets.</p>
      `,
    },
    {
      id: 6,
      title: "Projet Environnemental : Mboro Ville Verte 🌱",
      date: "octobre 2025",
      image: "/images/actualites/mboro2.jpg",
      content: `
       <p> La commune de Mboro s'engage résolument dans une politique de protection de l’environnement avec le projet **« Mboro Ville Verte »**, une initiative écologique ambitieuse menée par l’**Association Jeunesse Solidaire de Mboro (AJSM)**.  
       <p>🌿 **Contexte du projet**</p>
        <p> Face à la **croissance démographique rapide** et à la **pression sur les ressources naturelles**, Mboro fait partie des communes sénégalaises les plus exposées à la déforestation urbaine.  
        - Le projet « Mboro Ville Verte » est une réponse citoyenne qui vise à **renforcer la gestion communautaire de l’environnement**, tout en favorisant une prise de conscience collective des enjeux écologiques.</p>  
       
        <p>🌍 **Description du projet**</p>
        <p>**Organisateur :** Association Jeunesse Solidaire de Mboro (AJSM)  
        - **Nom du projet :** Mboro Ville Verte (M2V)  
        - **Durée :** 1 mois  
        - **Lieu :** Mboro, Sénégal </p> 
        <p>🎯 **Objectifs et missions**</p>
       <p>🌱 **Reboiser** les 10 quartiers et 15 établissements scolaires de la ville.  
        - 💧 **Sensibiliser** les habitants à la gestion durable des ressources naturelles.  
        - ♻️ **Former** les jeunes aux techniques de compostage et de recyclage.  

        <p>💬 **Témoignage**</p>
        <p>“Ce projet est plus qu’une simple activité de reboisement. C’est une manière de redonner vie à notre commune, d’unir nos forces et de transmettre aux jeunes la valeur du respect de la nature.”`, 
      
    },
    {
      id: 7,
      title: "🎥 Le maire de Mboro appelle à l’aide pour l’extension du périmètre communal",
      date: "9 octobre 2025",
      video: "/videos/mboro.mp4",
      image: "images/actualites/video-banner.jpg", // <-- ajoute une image ici
      content: `
        <p>Le maire de <strong>Mboro</strong>, <strong>Abdallah Tall</strong>, appelle les nouvelles autorités à soutenir la commune dans son projet d’<strong>extension du périmètre communal</strong>.<p>
          <p>Il souligne que l’étroitesse actuelle, notamment du marché et de la gare routière, combinée à la traversée quotidienne de camions, représente un danger pour les habitants.</p>
        <p>Selon lui, <em>la ville de Mboro a un besoin urgent d’assiette foncière</em> pour la mise en œuvre de ses projets de développement, dans les secteurs du commerce, du transport et de l’habitat.</p>
        <p>Le maire en appelle à une <strong>concertation entre l’État et les collectivités locales</strong> pour identifier des solutions durables qui permettront à Mboro de se développer harmonieusement tout en garantissant la sécurité et le bien-être de ses citoyens.</p>`,
    },
    {
      id: 8,
      title: "📚 𝐑𝐞𝐧𝐭𝐫𝐞́𝐞 𝐬𝐜𝐨𝐥𝐚𝐢𝐫𝐞 𝟐𝟎𝟐𝟓-𝟐𝟎𝟐𝟔 : 𝐯𝐢𝐬𝐢𝐭𝐞 𝐝𝐞𝐬 𝐞́𝐭𝐚𝐛𝐥𝐢𝐬𝐬𝐞𝐦𝐞𝐧𝐭𝐬 𝐬𝐜𝐨𝐥𝐚𝐢𝐫𝐞𝐬 𝐝𝐞 𝐌𝐛𝐨𝐫𝐨",
      date: "8 octobre 2025",
      image: "/images/actualites/mboro5.jpg",
      content: `
                  <p>Ce mercredi <strong>08 octobre 2025</strong> marque la reprise officielle des cours pour l’année scolaire <strong>2025-2026</strong>.
          À cette occasion, <strong>l’Adjoint au Sous-préfet de Méouane</strong> a effectué une visite de terrain au <strong>lycée de Mboro</strong>, au <strong>CEM Mboro 1</strong> ainsi que dans plusieurs <strong>écoles primaires</strong> de la commune, 
          afin de constater l’effectivité de la rentrée.</p>
          <p>Il était accompagné de <strong>M. Lamine Diakité</strong>, Adjoint au Maire, 
          et de <strong>M. Ibrahima Camara</strong>, Président de la Commission Éducation.
        </p>
        <p>À l’issue de la visite, <strong>M. le Sous-préfet</strong> a exprimé sa satisfaction quant au bon déroulement 
          de la rentrée dans la commune et a félicité la municipalité pour les efforts soutenus 
          en faveur du <strong>secteur éducatif</strong>.</p>
          <p>Pour sa part, <strong>M. Lamine Diakité</strong> a saisi l’occasion pour souhaiter 
          une excellente rentrée scolaire à l’ensemble du corps administratif, enseignant et aux élèves, 
          tout en réitérant la disponibilité de la <strong>Mairie de Mboro</strong> à accompagner le secteur éducatif, 
          convaincue qu’il demeure le <em>socle du développement durable de la communauté</em>.</p>`,
    },
    {
      id: 9,
      title: "[#ÉVÉNEMENT] Finales du concours de dictée et du tournoi de scrabble à Mboro 🥇🥈🥉",
      date: "4 octobre 2025",
      image: "/images/actualites/mboro7.jpg",
      content: `
        <p>Le Centre Socio-éducatif et Culturel ElHadji Ngalgou Ndiaye a accueilli les finales du concours de dictée et du tournoi de scrabble organisés par la zone Navétanes de Mboro.</p>
        <p>Lamine Diakité, Adjoint au Maire, était présent pour encourager les participants et témoigner du soutien de la municipalité aux initiatives valorisant l’éducation, la culture et la jeunesse.</p>
        <p>#Culture #Éducation #Jeunesse #Navétanes #Dictée #Scrabble</p>`,
          },
    {
      id: 10,
      title: "🎥 Remise de fournitures scolaires par la Mairie de Mboro",
      date: "3 octobre 2025",
      video: "/videos/mboro2.mp4",
      content: `
        <p>La Mairie de Mboro a offert un lot important de fournitures scolaires 🎒📚 aux écoles primaires de la commune.</p>
        <p>📺 Suivez à travers ce lien la version wolof de la cérémonie de remise diffusée sur Vitale TV.</p>`,
          },
    {
      id: 11,
      title: "🤝 Rencontre entre le bureau municipal et le Directeur Général de l’Ageroute",
      date: "2 octobre 2025",
      image: "/images/actualites/mboro8.jpg",
      content: `
        <p>Une délégation du bureau municipal, conduite par le Maire Abdallah Tall, a rencontré à Dakar M. Mamadou Ndao, Directeur Général de l’Ageroute.</p>
        <p>Les échanges ont porté sur les travaux de la route principale de Mboro et sur les orientations futures pour renforcer les infrastructures routières.</p>
        <p>#Concertation #Infrastructures #DéveloppementDurable #Ageroute #CommuneMboro</p>`,
        },
    {
      id: 12,
      title: "[#DÉDICACE] 📚 Présentation du livre « ECLAT : La lumière inclusive »",
      date: "1 octobre 2025",
      image: "/images/actualites/mboro9.jpg",
      content: `
        <p>Le Maire Abdallah Tall, accompagné de son adjoint Lamine Diakité, a reçu M. Mansour Deme, auteur de l’ouvrage <strong>ECLAT : La lumière inclusive</strong>.</p>
        <p>L’ouvrage met en avant l’éducation inclusive au Sénégal et le projet ECLAT mis en œuvre à Mboro par l’ONG Jeunesse et Développement et le PADEM.</p>
        <p>Le Maire a salué cette initiative en faveur de l’inclusion et de l’égalité des chances. 👏</p>
        <p>#EducationInclusive #Handicap #ECLAT #Inclusion #Solidarité</p>`,
    },
   {
  id: 13,
  title: "🎗️ Octobre Rose à Mboro : Unissons nos forces contre le cancer du sein",
  date: "Octobre 2025",
  image: "/images/actualites/mboro11.jpg",
  content: `
    <p><strong>[#OCTOBRE_ROSE]</strong> 𝙊𝒄𝙩𝒐𝙗𝙧𝙚 𝙍𝒐𝙨𝙚, 𝙝𝒐𝙢𝙢𝙖𝙜𝙚 𝙖̀ 𝙣𝒐𝙨 𝙛𝙚𝙢𝙢𝙚𝙨 𝒄𝙤𝙪𝙧𝙖𝙜𝙚𝙪𝙨𝙚𝙨.</p>
    <p>𝘌𝘯 𝘤𝘦 𝘮𝘰𝘪𝘴 𝘥’𝘖𝘤𝘵𝘰𝘣𝘳𝘦 𝘙𝘰𝘴𝘦, 𝘭𝘢 𝘮𝘶𝘯𝘪𝘤𝘪𝘱𝘢𝘭𝘪𝘵𝘦́ 𝘳𝘦𝘯𝘥 𝘩𝘰𝘮𝘢𝘨𝘦 𝘢̀ 𝘵𝘰𝘶𝘵𝘦𝘴 𝘭𝘦𝘴 𝘧𝘦𝘮𝘮𝘦𝘴, 𝘱𝘪𝘭𝘪𝘦𝘳𝘴 𝘥𝘦 𝘯𝘰𝘴 𝘧𝘢𝘮𝘪𝘭𝘭𝘦𝘴 𝘦𝘵 𝘥𝘦 𝘯𝘰𝘴 𝘤𝘰𝘮𝘮𝘶𝘯𝘢𝘶𝘵𝘦́𝘴.</p>
    <p>𝘝𝘰𝘶𝘴 𝘦̂𝘵𝘦𝘴 𝘯𝘰𝘴 𝘮𝘦̀𝘳𝘦𝘴, 𝘯𝘰𝘴 𝘴œ𝘶𝘳𝘴, 𝘯𝘰𝘴 𝘦́𝘱𝘰𝘶𝘴𝘦𝘴, 𝘯𝘰𝘴 𝘧𝘪𝘭𝘭𝘦𝘴… 𝘦𝘵 𝘤𝘩𝘢𝘤𝘶𝘯𝘦 𝘥𝘦 𝘷𝘰𝘶𝘴 𝘱𝘰𝘳𝘵𝘦 𝘶𝘯𝘦 𝘧𝘰𝘳𝘤𝘦 𝘦𝘵 𝘶𝘯𝘦 𝘥𝘪𝘨𝘯𝘪𝘵𝘦́ 𝘲𝘶𝘪 𝘪𝘯𝘴𝘱𝘪𝘳𝘦𝘯𝘵 𝘤𝘩𝘢𝘲𝘶𝘦 𝘫𝘰𝘶𝘳.</p>
    <p>𝘓𝘦 𝘔𝘢𝘪𝘳𝘦 𝘈𝘣𝘥𝘢𝘭𝘭𝘢𝘩 𝘛𝘢𝘭𝘭, 𝘧𝘪𝘥𝘦̀𝘭𝘦 𝘢̀ 𝘴𝘰𝘯 𝘦𝘯𝘨𝘢𝘨𝘦𝘮𝘦𝘯𝘵 𝘢𝘶𝘹 𝘤𝘰̂𝘵𝘦́𝘴 𝘥𝘦𝘴 𝘧𝘦𝘮𝘮𝘦𝘴, 𝘴𝘦 𝘵𝘪𝘦𝘯𝘵 𝘢̀ 𝘷𝘰𝘴 𝘤𝘰̂𝘵𝘦́𝘴 𝘥𝘢𝘯𝘴 𝘤𝘦 𝘤𝘰𝘮𝘣𝘢𝘵 𝘱𝘰𝘶𝘳 𝘭𝘢 𝘷𝘪𝘦 𝘦𝘵 𝘱𝘰𝘶𝘳 𝘭𝘢 𝘴𝘢𝘯𝘵𝘦́.</p>
    <p>𝘖𝘤𝘵𝘰𝘣𝘳𝘦 𝘙𝘰𝘴𝘦 𝘯’𝘦𝘴𝘵 𝘱𝘢𝘴 𝘴𝘦𝘶𝘭𝘦𝘮𝘦𝘯𝘵 𝘶𝘯 𝘴𝘺𝘮𝘣𝘰𝘭𝘦 : 𝘤’𝘦𝘴𝘵 𝘶𝘯 𝘢𝘱𝘱𝘦𝘭 𝘢̀ 𝘭’𝘢𝘤𝘵𝘪𝘰𝘯, 𝘢̀ 𝘭𝘢 𝘴𝘦𝘯𝘴𝘪𝘣𝘪𝘭𝘪𝘴𝘢𝘵𝘪𝘰𝘯 𝘦𝘵 𝘴𝘶𝘳𝘵𝘰𝘶𝘵 𝘢𝘶 𝘥𝘦́𝘱𝘪𝘴𝘵𝘢𝘨𝘦 𝘱𝘳𝘦́𝘤𝘰𝘤𝘦, 𝘤𝘢𝘳 𝘥𝘦́𝘵𝘦𝘤𝘵𝘦𝘳 𝘵𝘰̂𝘵, 𝘤’𝘦𝘴𝘵 𝘴𝘢𝘶𝘷𝘦𝘳 𝘥𝘦𝘴 𝘷𝘪𝘦𝘴.</p>
    <p>𝘈̀ 𝘵𝘰𝘶𝘵𝘦𝘴 𝘤𝘦𝘭𝘭𝘦𝘴 𝘲𝘶𝘪 𝘭𝘶𝘵𝘵𝘦𝘯𝘵, 𝘯𝘰𝘶𝘴 𝘷𝘰𝘶𝘴 𝘦𝘯𝘵𝘰𝘶𝘳𝘰𝘯𝘴 𝘥’𝘢𝘮𝘰𝘶𝘳, 𝘥𝘦 𝘴𝘰𝘭𝘪𝘥𝘢𝘳𝘪𝘵𝘦́ 𝘦𝘵 𝘥𝘦 𝘱𝘳𝘪𝘦̀𝘳𝘦.</p>
    <p>𝘈̀ 𝘤𝘦𝘭𝘭𝘦𝘴 𝘲𝘶𝘪 𝘰𝘯𝘵 𝘷𝘢𝘪𝘯𝘤𝘶 𝘭𝘢 𝘮𝘢𝘭𝘢𝘥𝘪𝘦 𝘨𝘳𝘢̂𝘤𝘦 𝘢𝘶 𝘤𝘰𝘶𝘳𝘢𝘨𝘦 𝘦𝘵 𝘢𝘶 𝘥𝘦́𝘱𝘪𝘴𝘵𝘢𝘨𝘦, 𝘷𝘰𝘶𝘴 𝘦̂𝘵𝘦𝘴 𝘯𝘰𝘴 𝘩𝘦́𝘳𝘰𝘪̈𝘯𝘦𝘴 𝘦𝘵 𝘶𝘯 𝘦𝘴𝘱𝘰𝘪𝘳 𝘷𝘪𝘷𝘢𝘯𝘵.</p>
    <p>𝘈̀ 𝘤𝘦𝘭𝘭𝘦𝘴 𝘲𝘶𝘦 𝘯𝘰𝘶𝘴 𝘢𝘷𝘰𝘯𝘴 𝘱𝘦𝘳𝘥𝘶𝘦𝘴, 𝘷𝘰𝘵𝘳𝘦 𝘴𝘰𝘶𝘷𝘦𝘯𝘪𝘳 𝘤𝘰𝘯𝘵𝘪𝘯𝘶𝘦 𝘥’𝘦́𝘤𝘭𝘢𝘪𝘳𝘦𝘳 𝘯𝘰𝘴 𝘱𝘢𝘴 𝘦𝘵 𝘥𝘦 𝘳𝘦𝘯𝘧𝘰𝘳𝘤𝘦𝘳 𝘯𝘰𝘵𝘳𝘦 𝘥𝘦́𝘵𝘦𝘳𝘮𝘪𝘯𝘢𝘵𝘪𝘰𝘯.</p>
    <p>𝘓𝘦 𝘤𝘢𝘯𝘤𝘦𝘳 𝘥𝘶 𝘴𝘦𝘪𝘯 𝘯’𝘦𝘴𝘵 𝘱𝘢𝘴 𝘶𝘯𝘦 𝘧𝘢𝘵𝘢𝘭𝘪𝘵𝘦́. 𝘌𝘯𝘴𝘦𝘮𝘣𝘭𝘦, 𝘢𝘷𝘦𝘤 𝘭𝘢 𝘱𝘳𝘦́𝘷𝘦𝘯𝘵𝘪𝘰𝘯, 𝘭𝘦 𝘥𝘦́𝘱𝘪𝘴𝘵𝘢𝘨𝘦 𝘱𝘳𝘦́𝘤𝘰𝘤𝘦 𝘦𝘵 𝘭’𝘢𝘤𝘤𝘰𝘮𝘱𝘢𝘨𝘯𝘦𝘮𝘦𝘯𝘵, 𝘯𝘰𝘶𝘴 𝘱𝘰𝘶𝘷𝘰𝘯𝘴 𝘱𝘳𝘰𝘵𝘦́𝘨𝘦𝘳 𝘯𝘰𝘴 𝘧𝘦𝘮𝘮𝘦𝘴 𝘦𝘵 𝘤𝘰𝘯𝘴𝘵𝘳𝘶𝘪𝘳𝘦 𝘶𝘯𝘦 𝘴𝘰𝘤𝘪𝘦́𝘵𝘦́ 𝘰𝘶̀ 𝘭𝘦𝘶𝘳 𝘴𝘢𝘯𝘵𝘦́ 𝘴𝘦𝘳𝘢 𝘶𝘯𝘦 𝘱𝘳𝘪𝘰𝘳𝘪𝘵𝘦́ 𝘢𝘣𝘴𝘰𝘭𝘶𝘦.</p>
    <p>🌷 <em>𝑂𝘤𝑡𝘰𝑏𝘳𝑒 𝑅𝘰𝑠𝘦, 𝑚𝘢𝑖𝘴 𝘴𝑢𝘳𝑡𝘰𝑢𝘵, 𝑢𝘯𝑒 𝑣𝘪𝑔𝘪𝑙𝘢𝑛𝘤𝑒 𝑑𝘦 𝘤ℎ𝘢𝑞𝘶𝘦 𝑗𝘰𝑢𝘳.</em> 🌷</p>
    <p>#DépistagePrécoce #FemmesCourage #SantéPourToutes</p>`,
},
    {
  id: 14,
  title: "🟢 Réception de projecteurs pour le stade municipal de Mboro",
  date: "29 septembre 2025",
  image: "/images/actualites/mboro13.jpg",
  content: `
  <p>[#BONNE_ACTION]</p>
  <p>La zone <strong>Navétanes de Mboro</strong> a réceptionné, ce lundi <strong>29 septembre</strong>, un lot de projecteurs destinés à l’éclairage du <strong>stade municipal</strong>.</p>
  <p>🎁 Ce don de grande importance est offert par <strong>M. Abdoulaye Ndiaye Ngalgou</strong>, Président du mouvement <strong>And Defar</strong>, un homme engagé et soucieux du développement de son terroir.</p>
  <p>La cérémonie s’est tenue chez <strong>Mère Amy Top</strong>, Présidente des femmes du mouvement et Adjointe au Maire.</p>
  <p>🤝 La zone Navétanes a remis le matériel à la <strong>mairie 🏛️</strong>, qui se chargera très prochainement de son installation.</p>
  <p>🙌 Au nom du Maire et du Conseil municipal, <strong>M. Lamine Diakité</strong> et <strong>M. Elhadji Oumar Wane</strong>, Adjoints au Maire, ont adressé leurs vifs remerciements à <strong>M. Abdoulaye Ndiaye Ngalgou</strong>, saluant en lui un digne fils de la commune, toujours soucieux de l'épanouissement de sa communauté.</p>
  <p>#Mboro #Navetanes #DéveloppementLocal #Sport #Solidarité #AndDefar #CommuneDeMboro #Football</p>
  `,
},

  ];

  const article = news.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <div className="actualite-detail-container not-found">
        <h2>Article non trouvé</h2>
        <Link to="/actualites" className="btn-retour">
          ⬅ Retour aux actualités
        </Link>
      </div>
    );
  }

 const bannerImage = getUrl(article.image || "/images/banniere-default.jpg");
  const mediaImage = getUrl(article.image);
  const videoSrc = article.video ? getUrl(article.video) : null;
  return (
    <div className="actualite-detail-page">
      {/* === Bannière === */}
      <div
        className="banner-actualite"
        style={{
          backgroundImage: bannerImage ? `url(${bannerImage})` : undefined,
        }}
      >
        
        <div className="banner-actualite-text">
          <h1 className="banner-title">{article.title}</h1>
          <p className="banner-date">{article.date}</p>
        </div>
      </div>

      {/* --- Contenu --- */}
      <div className="actualite-detail-container">
        {videoSrc ? (
          <video controls className="actualite-video">
            <source src={videoSrc} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        ) : (
          mediaImage && (
            <img
              src={mediaImage}
              alt={article.title}
              className="actualite-image"
            />
          )
        )}

        <div
          className="actualite-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>

        <div className="back-link">
          <Link to="/actualites">⬅ Retour aux actualités</Link>
        </div>
      </div>
    </div>
  );
}