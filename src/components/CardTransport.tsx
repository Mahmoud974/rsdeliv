"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Vehicle } from "@/db/vehicles";

export default function Cardtransport({ car }: { car: Vehicle }) {
  // État pour gérer l'affichage de la fiche technique
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour basculer l'état
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <Card>
      <CardHeader>
        <div className="relative w-full   h-52 mb-4">
          <Image
            src={car.img}
            alt="Camionnette"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <CardTitle>
          <p className="text-xl text-center">{car.title}</p>
        </CardTitle>
        <CardDescription>
          <ul className="grid grid-cols-3 gap-2 my-3 text-lg">
            <li>{car.transmission}</li>
            <li>{car.nombrePortes} portes</li>
            <li>{car.nombrePersonnes} personnes</li>
          </ul>
          <p
            className="text-blue-500 text-xl font-bold text-center hover:underline cursor-pointer"
            onClick={toggleExpand} // Toggle au clic
          >
            {isExpanded ? "FERMER" : "EN SAVOIR +"}
          </p>
        </CardDescription>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <div className="text-center ">
            <p className="text-2xl mb-2 font-bold ">Fiche Technique</p>
            <ul className="text-lg text-center">
              <li>
                Longueur de chargement: {car.ficheTechnique.longueurChargement}
              </li>
              <li>
                Largeur de chargement: {car.ficheTechnique.largeurChargement}
              </li>
              <li>
                Largeur passage roues: {car.ficheTechnique.largeurPassageRoues}
              </li>
              <li>
                Hauteur intérieure: {car.ficheTechnique.hauteurInterieure}
              </li>
              <li>
                Hauteur utile de chargement:{" "}
                {car.ficheTechnique.hauteurUtileChargement}
              </li>
              <li>
                Charge utile standard: {car.ficheTechnique.chargeUtileStandard}
              </li>
              <li>
                Volume utile standard: {car.ficheTechnique.volumeUtileStandard}
              </li>
              <li>
                Palettes 120x80x100: {car.ficheTechnique.palettes120x80x100}
              </li>
              <li>
                Palettes 120x100x100: {car.ficheTechnique.palettes120x100x100}
              </li>
            </ul>
          </div>
        </CardContent>
      )}
      <CardFooter>
        <Button className="w-full">Réserver</Button>
      </CardFooter>
    </Card>
  );
}
