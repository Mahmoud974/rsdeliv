import React from "react";
import Cardtransport from "@/components/CardTransport";
import { Vehicle, vehicles } from "@/db/vehicles";

export default function Location() {
  console.log(vehicles);

  return (
    <section className="container mx-auto  pb-16 mt-7">
      <p className="text-center text-xl font-semibold mb-8">Locations</p>
      <div className="text-center mx-auto lg:w-2/3 mb-8">
        <h2 className="text-3xl font-bold ">
          Véhicule disponible pour vos livraisons
        </h2>
        <p className="lg:mx-0 mx-5">
          {`Chez RS DELIV, nous vous proposons la location de véhicules utilitaires avec chauffeur dans [votre région ou ville]. 
  Nous nous occupons de la récupération, du chargement et du déchargement de vos produits, à la date et à l'heure de votre choix.`}
        </p>
      </div>

      <div className="flex lg:flex-row flex-col lg:mx-0 mx-6 justify-center gap-6">
        {vehicles.map((car: Vehicle, index: number) => (
          <Cardtransport car={car} key={index} />
        ))}
        {/* {[...Array(3)].map((_, index) => (
          <Cardtransport key={index} />
        ))} */}
      </div>
    </section>
  );
}
