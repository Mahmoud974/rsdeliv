"use client";
import React, { useState } from "react";
import Cardtransport from "@/components/CardTransport";
import { vehicles } from "@/db/vehicles";

export default function Location() {
  console.log(vehicles);
  const [expandedId, setExpandedId] = useState<number | null>(null);

   
  const toggleExpand = (id: number) => {
   
    setExpandedId(expandedId === id ? null : id);
  };
  return (
    <section id="services" className="container mx-auto  pb-16 mt-7">
     
      <div className="text-center mx-auto lg:w-2/3 mb-8">
      <p className="text-center text-blue-600">Services</p>
        <h2 className="text-3xl font-bold ">
          Véhicule disponible pour vos livraisons
        </h2>
        <p className="lg:mx-0 mx-5">
          {`Chez ISANO, nous vous proposons la location de véhicules utilitaires avec chauffeur dans votre ville. 
  Nous nous occupons de la récupération, du chargement et du déchargement de vos produits, à la date et à l'heure de votre choix.`}
        </p>
      </div>

      <div className="flex lg:flex-row flex-col lg:mx-0 mx-6 justify-center gap-6">
        {vehicles.map((car) => (
          <Cardtransport
            key={car.id}
            car={car}
            isExpanded={expandedId === car.id}  
            toggleExpand={() => toggleExpand(car.id)} 
          />
        ))}
      </div>
    </section>
  );
}
