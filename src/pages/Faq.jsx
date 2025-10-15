import React, { useState } from "react";
import "../styles/FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment obtenir un acte de naissance à Mboro ?",
      answer:
        "Vous pouvez faire la demande à la mairie ou via le formulaire en ligne. Munissez-vous d’une pièce d’identité et, si possible, du numéro d’enregistrement de naissance.",
    },
    {
      question: "Quels sont les horaires d’ouverture de la mairie ?",
      answer:
        "La mairie est ouverte du lundi au vendredi de 8h à 16h, et le samedi matin de 9h à 12h pour certains services d’état civil.",
    },
    {
      question: "Comment puis-je payer mes taxes communales ?",
      answer:
        "Les paiements peuvent être effectués directement à la trésorerie municipale ou par Mobile Money (Orange Money, Wave, Free Money).",
    },
    {
      question: "Comment contacter les services municipaux ?",
      answer:
        "Vous pouvez utiliser la page Contact du site, appeler le numéro de la mairie ou envoyer un email à mairiemboro@gmail.com.",
    },
    {
      question: "Comment participer aux programmes de formation ou d’emploi ?",
      answer:
        "Les jeunes peuvent s’inscrire à l’incubateur communal ou aux formations techniques en contactant le service Développement Local.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      {/* === Bannière === */}
      <div className="banner-faq">
       <h1>Foire Aux Questions</h1>
          <p>Trouvez les réponses aux questions les plus fréquentes</p>
        </div>
      
      {/* === Section FAQ === */}
      <div className="container">
        <h2>Questions fréquentes</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
