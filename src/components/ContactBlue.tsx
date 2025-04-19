import React from "react";
import { Button } from "./ui/button";

export default function ContactBlue() {
  return (
    <div className="bg-blue-700  py-16">
      <div className="text-center mx-auto flex flex-col justify-center">
        <p className="text-3xl font-semibold">
          Vous n’êtes pas encore sûr(e) ? Aucun problème, <br />
          on peut commencer par un essai pour vous permettre de voir par
          vous-même.
        </p>
        <div className="mt-8">
          <Button>Contactez-nous</Button>
        </div>
      </div>
    </div>
  );
}
