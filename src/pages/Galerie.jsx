import React, { useState } from "react";
import "../styles/Galerie.css";

const getUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

export default function Galerie() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // ✅ Toutes les ressources passent maintenant par getUrl()
  const medias = [
    { id: 1, type: "image", src: getUrl("/images/galerie/mboro1.jpg"), title: "Plage de Mboro" },
    { id: 2, type: "image", src: getUrl("/images/galerie/mboro2.jpg"), title: "Centre-ville" },
    { id: 3, type: "image", src: getUrl("/images/galerie/mboro3.jpg"), title: "Marché de Mboro" },
    { id: 4, type: "image", src: getUrl("/images/galerie/mboro4.jpg"), title: "Pêcheurs à l'œuvre" },
    { id: 5, type: "image", src: getUrl("/images/galerie/mboro5.jpg"), title: "Centre de santé" },
    { id: 6, type: "image", src: getUrl("/images/galerie/mboro6.jpg"), title: "Vue aérienne de la ville" },
    { id: 7, type: "image", src: getUrl("/images/galerie/mboro7.jpg"), title: "Mosquée centrale" },
    { id: 8, type: "image", src: getUrl("/images/galerie/mboro8.jpg"), title: "École primaire" },
    { id: 9, type: "image", src: getUrl("/images/galerie/mboro9.jpg"), title: "Plage au coucher du soleil" },
    { id: 10, type: "image", src: getUrl("/images/galerie/mboro10.jpg"), title: "Stade de Mboro" },
    { id: 11, type: "image", src: getUrl("/images/galerie/mboro11.jpg"), title: "Forage de Mboro" },
    { id: 12, type: "image", src: getUrl("/images/galerie/mboro12.jpg"), title: "La plage" },
    { id: 13, type: "image", src: getUrl("/images/galerie/mboro13.jpg"), title: "CEM de Mboro - Bancs écologiques" },
    { id: 14, type: "image", src: getUrl("/images/galerie/mboro14.jpg"), title: "CEM de Mboro - Bancs écologiques" },
    { id: 15, type: "image", src: getUrl("/images/galerie/mboro15.jpg"), title: "CEM de Mboro - Bancs écologiques" },
    { id: 16, type: "image", src: getUrl("/images/galerie/mboro16.jpg"), title: "CEM de Mboro - Bancs écologiques" },
    { id: 17, type: "image", src: getUrl("/images/galerie/mboro17.jpg"), title: "CEM de Mboro - Bancs écologiques" },
    { id: 18, type: "image", src: getUrl("/images/galerie/mboro18.jpg"), title: "CEM de Mboro - Bancs écologiques" },
    { id: 19, type: "image", src: getUrl("/images/galerie/mboro19.jpg"), title: "CEM de Mboro - Bancs écologiques" },
    { id: 20, type: "image", src: getUrl("/images/galerie/mboro20.jpg"), title: "CEM de Mboro - Bancs écologiques" },
    { id: 21, type: "image", src: getUrl("/images/galerie/mboro21.jpg"), title: "CEM de Mboro - Bancs écologiques" },
    { id: 22, type: "image", src: getUrl("/images/galerie/mboro22.jpg"), title: "Match de Foot au stade" },
    { id: 23, type: "image", src: getUrl("/images/galerie/mboro23.jpg"), title: "Collecte de graine" },
    { id: 24, type: "image", src: getUrl("/images/galerie/paroisse-mboro.jpg"), title: "Paroisse Jésus Ouvrier de Mboro" },
    { id: 25, type: "image", src: getUrl("/images/galerie/mboro24.jpg"), title: "Campement à Mboro" },
    { id: 26, type: "image", src: getUrl("/images/galerie/lycée.jpg"), title: "Lycée Taiba ICS Mboro" },
    { id: 27, type: "image", src: getUrl("/images/galerie/dispensaire.jpg"), title: "Dispensaire Notre Dame de Mboro" },
    { id: 28, type: "image", src: getUrl("/images/galerie/usine.jpg"), title: "Usine ICS de Mboro" },
    { id: 29, type: "image", src: getUrl("/images/galerie/clinique.jpg"), title: "Clinique SARR de Mboro" },
    { id: 30, type: "image", src: getUrl("/images/galerie/ecole.jpg"), title: "Garderie Notre Dame de Mboro" },
    { id: 31, type: "video", src: getUrl("/videos/mboro.mp4"), title: "Préparation nettoyage à la plage" },
    { id: 32, type: "video", src: getUrl("/videos/mboro5.mp4"), title: "Kempes en action" },
    { id: 33, type: "video", src: getUrl("/videos/gareroutiere.mp4"), title: "Gare routiere de Mboro" },
    { id: 34, type: "video", src: getUrl("/videos/centre.mp4"), title: "Centre Kinesie de Mboro" },
    { id: 35, type: "video", src: getUrl("/videos/clinique.mp4"), title: "Clinique SARR de Mboro" },
    { id: 35, type: "video", src: getUrl("/videos/hotel.mp4"), title: "Hotel Abdou de Mboro" },
  ];

 return (
    <div className="galerie-page">
      {/* === Bannière === */}
      <section
        className="galerie-banner"
        style={{
          backgroundImage: `url(${getUrl("/images/galerie/mboro-banner.jpg")})`,
        }}
      >
       <div className="galerie-banner-overlay">
          <h1>Galerie du Mini Portail</h1>
          <p>Découvrez la beauté et la vitalité de notre commune.</p>
        </div>
      </section>

      {/* === Contenu galerie === */}
      <div className="galerie-container">
        <div className="gallery-grid">
          {medias.map((media) => (
            <div
              key={media.id}
              className="gallery-item"
              onClick={() => setSelectedMedia(media)}
            >
              {media.type === "image" ? (
                <img src={media.src} alt={media.title} className="gallery-img" />
              ) : (
                <video className="gallery-video" muted loop autoPlay playsInline>
                  <source src={media.src} type="video/mp4" />
                </video>
              )}
              <div className="gallery-overlay">
                <p>{media.title}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedMedia && (
          <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="modal-image"
                />
              ) : (
                <video controls autoPlay className="modal-video">
                  <source src={selectedMedia.src} type="video/mp4" />
                </video>
              )}
              <p className="modal-title">{selectedMedia.title}</p>
              <button
                className="close-modal"
                onClick={() => setSelectedMedia(null)}
              >
                ✕ Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}