import React, { useState } from "react";
import "../styles/Legislation.css";
import { FaFilePdf, FaFolder, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Legislation() {
  // === Textes de loi ===
  const documents = [
    {
      title: "Constitution du Sénégal",
      file: "/documents/constitution-senegal.pdf",
    },
    {
      title: "Code électoral",
      file: "/documents/code-electoral.pdf",
    },
    {
      title: "Code des collectivités territoriales",
      file: "/documents/code-collectivites.pdf",
    },
    {
      title: "Code de l’urbanisme",
      file: "/documents/code-urbanisme.pdf",
    },
  ];

  // === Jurisprudence : 6 dossiers ===
  const jurisprudence = [
    {
      category: "Contentieux sur l’installation des bureaux",
      files: [
        { title: "Décision n°001", file: "/documents/installation/decision1.pdf" },
        { title: "Rapport du Tribunal administratif", file: "/documents/installation/rapport.pdf" },
      ],
    },
    {
      category: "Contentieux sur l’urbanisme",
      files: [
        { title: "Jugement n°003", file: "/documents/urbanisme/jugement.pdf" },
        { title: "Arreté préfectoral", file: "/documents/urbanisme/arrete.pdf" },
      ],
    },
    {
      category: "Contentieux sur les délibérations",
      files: [
        { title: "Décision 2024-02", file: "/documents/deliberations/decision.pdf" },
        { title: "Procès-verbal", file: "/documents/deliberations/pv.pdf" },
      ],
    },
    {
      category: "Contentieux sur les attributions des marchés",
      files: [
        { title: "Avis du comité", file: "/documents/marches/avis.pdf" },
        { title: "Décision du maire", file: "/documents/marches/decision.pdf" },
      ],
    },
    {
      category: "Contentieux sur les responsabilités",
      files: [
        { title: "Rapport disciplinaire", file: "/documents/responsabilites/rapport.pdf" },
        { title: "Décision 2024-07", file: "/documents/responsabilites/decision.pdf" },
      ],
    },
    {
      category: "Contentieux sur l’état civil",
      files: [
        { title: "Jugement supplétif", file: "/documents/etat-civil/jugement.pdf" },
        { title: "Instruction du procureur", file: "/documents/etat-civil/instruction.pdf" },
      ],
    },
  ];

  // Pour gérer l’ouverture/fermeture de chaque dossier
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFolder = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="legislation">
      {/* === Bannière === */}
      <div className="banner-legislation">
        <div className="overlay">
          <h1>Textes de Loi & Jurisprudence</h1>
          <p>Accédez aux lois, règlements et décisions de justice locales</p>
        </div>
      </div>

      {/* === Section 1 : Textes officiels === */}
      <div className="container">
        <h2>📘 Documents Officiels</h2>
        <div className="docs-grid">
          {documents.map((doc, index) => (
            <div key={index} className="doc-card">
              <FaFilePdf className="pdf-icon" />
              <h3>{doc.title}</h3>
              <a href={doc.file} download>
                📥 Télécharger
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* === Section 2 : Jurisprudence === */}
      <div className="container">
        <h2>⚖️ Jurisprudences</h2>
        <div className="jurisprudence-list">
          {jurisprudence.map((folder, index) => (
            <div key={index} className="jurisprudence-folder">
              <div className="folder-header" onClick={() => toggleFolder(index)}>
                <FaFolder className="folder-icon" />
                <h3>{folder.category}</h3>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>

              {openIndex === index && (
                <div className="folder-content">
                  {folder.files.map((file, fIndex) => (
                    <div key={fIndex} className="file-item">
                      <FaFilePdf className="pdf-icon" />
                      <span>{file.title}</span>
                      <a href={file.file} download>
                        📄 Ouvrir
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
