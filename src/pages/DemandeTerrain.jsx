import React, { useState } from "react";
import "../styles/DemandeTerrain.css";

export default function DemandeTerrain() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="demande-container success-message">
        <h1>✅ Demande envoyée avec succès</h1>
        <p>
          Merci pour votre confiance. Votre demande de terrain a bien été
          enregistrée et sera traitée dans les plus brefs délais.
        </p>
        <p>Vous recevrez un email de confirmation sous peu.</p>
      </section>
    );
  }

  return (
    <>
      {/* ✅ Bannière */}
      <div className="banner-demande">
          <h1>📝 Demande de Terrain à Mboro</h1>
          <p>
            Soumettez votre dossier en ligne pour une gestion plus rapide et
            transparente de vos demandes foncières.
          </p>
        </div>

      {/* ✅ Contenu du formulaire */}
      <section className="demande-container">
        <h1>Nouvelle demande de terrain</h1>

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
        <p className="steps">Étape {step} sur 3</p>

        {step === 1 && (
          <div className="form-step fade-in">
            <h2>Informations Personnelles</h2>
            <form>
              <label>Prénom</label>
              <input type="text" placeholder="Votre prénom" required />

              <label>Nom</label>
              <input type="text" placeholder="Votre nom" required />

              <label>Email</label>
              <input type="email" placeholder="Votre email" required />

              <label>Téléphone</label>
              <input type="tel" placeholder="Ex: 77xxxxxxx" required />

              <label>Adresse</label>
              <input type="text" placeholder="Votre adresse" required />

              <div className="form-buttons">
                <button type="button" onClick={nextStep}>
                  Suivant ➡️
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="form-step fade-in">
            <h2>Détails de la demande</h2>
            <form>
              <label>Type de demande</label>
              <select required>
                <option>-- Sélectionnez --</option>
                <option>Nouvelle parcelle</option>
                <option>Extension</option>
              </select>

              <label>Localité</label>
              <select required>
                <option>-- Sélectionnez --</option>
                <option>Centre-ville</option>
                <option>Mboro-sur-mer</option>
                <option>Quartier pêcheur</option>
              </select>

              <label>Superficie (m²)</label>
              <input type="number" placeholder="Ex: 250" required />

              <div className="form-buttons">
                <button type="button" onClick={prevStep}>
                  ⬅️ Précédent
                </button>
                <button type="button" onClick={nextStep}>
                  Suivant ➡️
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="form-step fade-in">
            <h2>Documents et validation</h2>
            <form onSubmit={handleSubmit}>
              <label>Type de document</label>
              <select required>
                <option>-- Sélectionnez --</option>
                <option>CNI</option>
                <option>Passeport</option>
              </select>

              <label>Recto du document</label>
              <input type="file" accept=".pdf,.jpg,.jpeg,.png" required />

              <label>Verso du document</label>
              <input type="file" accept=".pdf,.jpg,.jpeg,.png" required />

              <label>Numéro d'identification nationale (NIN)</label>
              <input
                type="text"
                maxLength="15"
                placeholder="15 caractères"
                required
              />

              <div className="form-buttons">
                <button type="button" onClick={prevStep}>
                  ⬅️ Précédent
                </button>
                <button type="submit">✅ Soumettre la demande</button>
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
}
