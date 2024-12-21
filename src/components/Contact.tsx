"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";

interface FormData {
  name: string;
  poem: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    poem: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<boolean>(false); // Nouveau state pour le message de succès

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errors: FormErrors = {
      email: "",
      message: "",
    };

    if (!formData.email) errors.email = "L'adresse e-mail est obligatoire.";
    if (!formData.message) errors.message = "Le message est obligatoire.";

    if (errors.email || errors.message) {
      setFormErrors(errors);
    } else {
      setFormErrors({ email: "", message: "" });
      console.log("Form submitted:", formData);

      // Afficher le message de succès
      setSuccessMessage(true);

      // Masquer le message après 3 secondes
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);

      // Réinitialiser le formulaire après l'envoi
      setFormData({
        name: "",
        poem: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="container mx-auto p-6 mb-6" id="contact">
      <p className="text-center">Contact</p>
      <h2 className="text-3xl font-bold text-center mb-6">
        Vous souhaitez en savoir plus ?
      </h2>

      <div className="max-w-2xl mx-auto gap-8 items-center">
        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom */}
          <div>
            <label htmlFor="name" className="block font-semibold">
              Votre nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Entrez votre nom"
            />
          </div>

          {/* Poème */}
          <div>
            <label htmlFor="poem" className="block font-semibold">
              Please enter a small poem
            </label>
            <textarea
              id="poem"
              name="poem"
              value={formData.poem}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Écrivez un petit poème"
              rows={4}
            ></textarea>
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block font-semibold">
              Adresse e-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Entrez votre e-mail"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}
          </div>

          {/* Téléphone */}
          <div>
            <label htmlFor="phone" className="block font-semibold">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Entrez votre numéro de téléphone"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-semibold">
              Votre message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Écrivez votre message"
              rows={4}
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm">{formErrors.message}</p>
            )}
          </div>

          {/* Politique de confidentialité */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="privacy" required className="w-5 h-5" />
            <label htmlFor="privacy" className="text-sm">
              {` Notre politique de confidentialité s'applique.`}
            </label>
          </div>

          {/* Submit Button */}
          <Button className="w-full">Envoyer</Button>
        </form>

        {/* Message de succès */}
        {successMessage && (
          <p className="text-center text-green-500 mt-4">Message envoyé !</p>
        )}
      </div>
    </section>
  );
}
