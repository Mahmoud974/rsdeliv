import ContactForm from "@/components/Contact";
import Home from "@/components/Home";
import React from "react";

export default function page() {
  return (
    <div>
      <Home />
      {/* Grand titre à mettre sur HOME */}
      <p>
        Nos services Nous avons la solution idéale pour répondre à vos besoins :
        livraison express, transport de meubles, ou livraison haut de gamme.
      </p>
      <ContactForm />
    </div>
  );
}
