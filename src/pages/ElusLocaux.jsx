import React from "react";
import "../styles/ElusLocaux.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🟢 Icône personnalisée pour les marqueurs
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// 📍 Liste complète des 27 quartiers de Mboro (coordonnées simulées autour de la ville)
const quartiers = [
  { nom: "Quartier HLM", lat: 15.1408, lng: -16.8860, delegue: "M. Aliou Ndiaye", contactD: "77 100 00 01", suppleant: "Mme Aïcha Fall", contactS: "77 200 00 01", photo: "/images/elus/hlm.jpg" },
  { nom: "Quartier Lassere", lat: 15.1412, lng: -16.8872, delegue: "M. Babacar Diop", contactD: "77 100 00 02", suppleant: "Mme Fatou Ndiaye", contactS: "77 200 00 02", photo: "/images/elus/keur-serigne.jpg" },
  { nom: "Quartier Thioupam", lat: 15.1399, lng: -16.8855, delegue: "M. Ousmane Ba", contactD: "77 100 00 03", suppleant: "Mme Coumba Cissé", contactS: "77 200 00 03", photo: "/images/elus/thioupam.jpg" },
  { nom: "Quartier Cité 2000", lat: 15.1405, lng: -16.8885, delegue: "M. Modou Sow", contactD: "77 100 00 04", suppleant: "Mme Rokhaya Diouf", contactS: "77 200 00 04", photo: "/images/elus/comico.jpg" },
  { nom: "Quartier Ndiaye", lat: 15.1415, lng: -16.8865, delegue: "M. Amadou Sarr", contactD: "77 100 00 05", suppleant: "Mme Astou Mbengue", contactS: "77 200 00 05", photo: "/images/elus/ndiaye.jpg" },
  { nom: "Quartier Marché", lat: 15.1395, lng: -16.8870, delegue: "M. Pape Faye", contactD: "77 100 00 06", suppleant: "Mme Ndeye Thiam", contactS: "77 200 00 06", photo: "/images/elus/keur-fallou.jpg" },
  { nom: "Quartier Darou Salam", lat: 15.1420, lng: -16.8858, delegue: "M. Mamadou Diouf", contactD: "77 100 00 07", suppleant: "Mme Khady Sene", contactS: "77 200 00 07", photo: "/images/elus/darou.jpg" },
  { nom: "Quartier Escale", lat: 15.1400, lng: -16.8890, delegue: "M. Abdoulaye Seck", contactD: "77 100 00 08", suppleant: "Mme Dieynaba Diallo", contactS: "77 200 00 08", photo: "/images/elus/escale.jpg" },
  { nom: "Quartier Médina", lat: 15.1398, lng: -16.8878, delegue: "M. Lamine Gaye", contactD: "77 100 00 09", suppleant: "Mme Aissatou Kane", contactS: "77 200 00 09", photo: "/images/elus/medina.jpg" },
  { nom: "Quartier Ngoumba", lat: 15.1425, lng: -16.8863, delegue: "M. Samba Thiam", contactD: "77 100 00 10", suppleant: "Mme Mame Diarra Faye", contactS: "77 200 00 10", photo: "/images/elus/ngoumba.jpg" },
  { nom: "Quartier Abour", lat: 15.1410, lng: -16.8848, delegue: "M. Ibrahima Ndiaye", contactD: "77 100 00 11", suppleant: "Mme Sokhna Ba", contactS: "77 200 00 11", photo: "/images/elus/keur-massar.jpg" },
  { nom: "Quartier Mbambara", lat: 15.1430, lng: -16.8870, delegue: "M. Adama Faye", contactD: "77 100 00 12", suppleant: "Mme Mbayang Diop", contactS: "77 200 00 12", photo: "/images/elus/mbambara.jpg" },
  { nom: "Quartier Ngaye Ngaye", lat: 15.1385, lng: -16.8845, delegue: "M. Doudou Cissé", contactD: "77 100 00 13", suppleant: "Mme Diarra Ka", contactS: "77 200 00 13", photo: "/images/elus/ngaye.jpg" },
  { nom: "Quartier Diamaguène", lat: 15.1418, lng: -16.8839, delegue: "M. Lamine Fall", contactD: "77 100 00 14", suppleant: "Mme Coumba Ndiaye", contactS: "77 200 00 14", photo: "/images/elus/diameguene.jpg" },
  { nom: "Quartier Cité Mariama", lat: 15.1423, lng: -16.8881, delegue: "M. Cheikh Sarr", contactD: "77 100 00 15", suppleant: "Mme Ndeye Faye", contactS: "77 200 00 15", photo: "/images/elus/keur-cheikh.jpg" },
  { nom: "Quartier Ngaye Fall", lat: 15.1406, lng: -16.8835, delegue: "M. Abdoulaye Sow", contactD: "77 100 00 16", suppleant: "Mme Rama Ndiaye", contactS: "77 200 00 16", photo: "/images/elus/ngaye-fall.jpg" },
  { nom: "Quartier Cité Mbaye Mbaye", lat: 15.1393, lng: -16.8888, delegue: "M. Amath Kane", contactD: "77 100 00 17", suppleant: "Mme Fatoumata Diop", contactS: "77 200 00 17", photo: "/images/elus/cite-mbaye.jpg" },
  { nom: "Quartier Keur Ndary", lat: 15.1435, lng: -16.8850, delegue: "M. Serigne Mbaye", contactD: "77 100 00 18", suppleant: "Mme Awa Gaye", contactS: "77 200 00 18", photo: "/images/elus/keur-ndary.jpg" },
  { nom: "Quartier Cité Ibrahima", lat: 15.1390, lng: -16.8839, delegue: "M. Mor Ndiaye", contactD: "77 100 00 19", suppleant: "Mme Marième Sarr", contactS: "77 200 00 19", photo: "/images/elus/cite-ibrahima.jpg" },
  { nom: "Quartier Ndong", lat: 15.1415, lng: -16.8895, delegue: "M. Issa Ndong", contactD: "77 100 00 20", suppleant: "Mme Fatou Ka", contactS: "77 200 00 20", photo: "/images/elus/ndong.jpg" },
  { nom: "Quartier Cité Hôpital", lat: 15.1380, lng: -16.8857, delegue: "M. Cheikh Ndiaye", contactD: "77 100 00 21", suppleant: "Mme Adji Sarr", contactS: "77 200 00 21", photo: "/images/elus/hopital.jpg" },
  { nom: "Quartier Cité Mbaye Mbaye 4", lat: 15.1428, lng: -16.8842, delegue: "M. Mamadou Sène", contactD: "77 100 00 22", suppleant: "Mme Rokhaya Cissé", contactS: "77 200 00 22", photo: "/images/elus/tivaouane.jpg" },
  { nom: "Quartier Mbaye Mbaye Peulh", lat: 15.1403, lng: -16.8828, delegue: "M. Djiby Thiam", contactD: "77 100 00 23", suppleant: "Mme Astou Faye", contactS: "77 200 00 23", photo: "/images/elus/police.jpg" },
  { nom: "Quartier Cité Fadel", lat: 15.1388, lng: -16.8825, delegue: "M. Oumar Gaye", contactD: "77 100 00 24", suppleant: "Mme Nafi Ndiaye", contactS: "77 200 00 24", photo: "/images/elus/cite-fadel.jpg" },
  { nom: "Quartier Keur Magor", lat: 15.1397, lng: -16.8898, delegue: "M. Abdou Faye", contactD: "77 100 00 25", suppleant: "Mme Aminata Sow", contactS: "77 200 00 25", photo: "/images/elus/keur-moussa.jpg" },
  { nom: "Quartier SKF", lat: 15.1429, lng: -16.8830, delegue: "M. Mamadou Fall", contactD: "77 100 00 26", suppleant: "Mme Amy Diop", contactS: "77 200 00 26", photo: "/images/elus/mame-diarra.jpg" },
  { nom: "Quartier Pathé Kane", lat: 15.1417, lng: -16.8892, delegue: "M. Abdoulaye Kane", contactD: "77 100 00 27", suppleant: "Mme Seynabou Fall", contactS: "77 200 00 27", photo: "/images/elus/keur-ndiaga.jpg" },
];

export default function ElusLocaux() {
  return (
    <div className="elus-container">
      {/* ✅ Bannière */}
      <div className="banner-elus">
         <h1>Délégués de Quartier de la Commune de MBORO</h1>
          <p>Découvrez les représentants de chaque quartier et leurs suppléants.</p>
        </div>
      
      {/* ✅ Carte interactive */}
      <div className="map-section">
        <h2>📍 Carte des Quartiers de Mboro</h2>
        <MapContainer
          center={[15.1405, -16.8868]}
          zoom={14}
          className="map-container"
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
          {quartiers.map((q, index) => (
            <Marker key={index} position={[q.lat, q.lng]} icon={customIcon}>
              <Popup>
                <div className="popup-content">
                  <img src={q.photo} alt={q.nom} className="popup-photo" />
                  <h3>{q.nom}</h3>
                  <p><strong>Délégué :</strong> {q.delegue} <br />📞 {q.contactD}</p>
                  <p><strong>Suppléant :</strong> {q.suppleant} <br />📞 {q.contactS}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      
{/* ✅ Légende stylée */}
        <div className="map-legend">
          <p>🗺️ Cliquez sur un marqueur pour voir les informations du quartier.<br/>
          📞 Les coordonnées des délégués et suppléants y sont disponibles.</p>
        </div>
      </div>
      {/* ✅ Tableau */}
      <table className="elus-table">
        <thead>
          <tr>
            <th>Quartier</th>
            <th>Délégué</th>
            <th>Contact</th>
            <th>Suppléant</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {quartiers.map((q, index) => (
            <tr key={index}>
              <td>{q.nom}</td>
              <td>{q.delegue}</td>
              <td>{q.contactD}</td>
              <td>{q.suppleant}</td>
              <td>{q.contactS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
