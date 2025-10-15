import React, { useState } from "react";
import "../styles/EtatCivilForm.css";

export default function EtatCivilForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    typeDemande: "",
    natureActe: "",
    titulaire: "",
    nom: "",
    prenom: "",
    telephone: "",
    adresse: "",
    adresse2: "",
    ville: "",
    region: "",
    nomTitulaire: "",
    prenomTitulaire: "",
    registre: "",
    annee: "",
    centre: "",
    exemplaires: 1,
    dateNaissance: "",
    justificatif: null,
    paiement: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="page-etat-civil">
      {/* === Bannière (hors formulaire) === */}
      <div className="banniere-etat-civil">
        <div className="overlay">
          <h1>📝 Service d’État Civil</h1>
          <p>
            Faites votre demande d’acte de naissance, de mariage ou de décès en ligne, rapidement et
            en toute sécurité.
          </p>
        </div>
      </div>

      {/* === Conteneur du formulaire === */}
      <section className="etat-civil-form">
        <h2>Formulaire de demande</h2>

        <form onSubmit={handleSubmit}>
          {/* Étape 1 */}
          {step === 1 && (
            <div className="form-step">
              <h3>Type de demande</h3>
              <select name="typeDemande" onChange={handleChange} required>
                <option value="">-- Sélectionnez --</option>
                <option>Acte de naissance</option>
                <option>Acte de mariage</option>
                <option>Certificat de mariage</option>
                <option>Certificat de décès</option>
                <option>Certificat de résidence</option>
                <option>Autre</option>
              </select>

              <h3>Nature de l’acte</h3>
              <select name="natureActe" onChange={handleChange} required>
                <option value="">-- Sélectionnez --</option>
                <option>Extrait</option>
                <option>Copie littérale</option>
                <option>Déclaration</option>
              </select>

              <h3>Êtes-vous titulaire ?</h3>
              <label>
                <input type="radio" name="titulaire" value="Oui" onChange={handleChange} /> Oui
              </label>
              <label>
                <input type="radio" name="titulaire" value="Non" onChange={handleChange} /> Non
              </label>

              <button type="button" onClick={() => setStep(2)}>
                Suivant →
              </button>
            </div>
          )}

          {/* Étape 2 */}
          {step === 2 && (
            <div className="form-step">
              <h3>Informations personnelles</h3>
              <input name="nom" placeholder="Nom" onChange={handleChange} required />
              <input name="prenom" placeholder="Prénom" onChange={handleChange} required />
              <input name="telephone" placeholder="Numéro de téléphone" onChange={handleChange} required />
              <input name="adresse" placeholder="Adresse" onChange={handleChange} />
              <input
                name="adresse2"
                placeholder="Adresse complémentaire (ex: Quartier, Immeuble...)"
                onChange={handleChange}
              />
              <div className="city-region">
                <input name="ville" placeholder="Ville" onChange={handleChange} />
                <input name="region" placeholder="État / Région" onChange={handleChange} />
              </div>

              <div className="buttons">
                <button type="button" onClick={() => setStep(1)}>
                  ← Retour
                </button>
                <button type="button" onClick={() => setStep(3)}>
                  Suivant →
                </button>
              </div>
            </div>
          )}

          {/* Étape 3 */}
          {step === 3 && (
            <div className="form-step">
              <h3>Informations sur le titulaire</h3>
              <input name="nomTitulaire" placeholder="Nom du titulaire" onChange={handleChange} />
              <input name="prenomTitulaire" placeholder="Prénom du titulaire" onChange={handleChange} />
              <input name="registre" placeholder="Numéro du registre" onChange={handleChange} />
              <input name="annee" placeholder="Année d’enregistrement" onChange={handleChange} />
              <select name="centre" onChange={handleChange}>
                <option value="">-- Sélectionnez le centre --</option>
                <option>Centre principal (Mairie)</option>
                <option>Centre secondaire (Hôpital)</option>
              </select>
              <input
                type="number"
                name="exemplaires"
                placeholder="Nombre d’exemplaires"
                min="1"
                onChange={handleChange}
              />
              <input
                type="text"
                name="dateNaissance"
                placeholder="Date et lieu de naissance"
                onChange={handleChange}
              />

              <div className="buttons">
                <button type="button" onClick={() => setStep(2)}>
                  ← Retour
                </button>
                <button type="button" onClick={() => setStep(4)}>
                  Suivant →
                </button>
              </div>
            </div>
          )}

          {/* Étape 4 */}
          {step === 4 && (
            <div className="form-step">
              <h3>Joindre vos documents</h3>
              <p>📎 Types de fichiers acceptés : Copie extrait, Volet 1, Bulletin de naissance, CNI, Passeport</p>
              <input type="file" name="justificatif" onChange={handleChange} required />

              <h3>Mode de paiement</h3>
              <select name="paiement" onChange={handleChange} required>
                <option value="">-- Choisissez un mode --</option>
                <option>Orange Money</option>
                <option>Wave</option>
                <option>Free Money</option>
                <option>Paiement sur place</option>
              </select>

              <p className="info-paiement">
                💳 Montant à payer : <strong>1 000 FCFA / exemplaire</strong>
              </p>

              <div className="buttons">
                <button type="button" onClick={() => setStep(3)}>
                  ← Retour
                </button>
                <button type="submit">Soumission</button>
              </div>
            </div>
          )}
        </form>

        {loading && (
          <div className="loading">
            <p>⏳ Veuillez patienter, envoi en cours...</p>
          </div>
        )}

        {submitted && !loading && (
          <div className="confirmation">
            <h2>✅ Merci !</h2>
            <p>Votre soumission a été envoyée avec succès.</p>
            <button onClick={() => (setStep(1), setSubmitted(false))}>
              Faire une nouvelle demande
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
