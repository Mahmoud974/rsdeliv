import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Services() {
  return (
    <div className="relative w-full h-[400px] sm:h-[550px] lg:h-[400px]">
      <Image
        src="/container.webp"
        alt="Photo de plusieurs fourgons"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 shadow-lg filter brightness-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-4 px-4">
        <p>Nos services</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
          Explorez nos services uniques
        </h2>
        <p className="lg:text-lg sm:w-1/2">
          Nous offrons une large gamme de prestations qui répondent à vos
          besoins spécifiques. Que vous cherchiez à améliorer votre espace de
          vie ou à ajouter une touche unique à votre décoration, nous avons les
          solutions parfaites pour vous. Découvrez tout ce que nous avons à
          offrir.
        </p>
        <Button>Découvrez Nos Offres</Button>
      </div>
    </div>
  );
}
