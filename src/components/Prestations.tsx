import React from "react";
import Image from "next/image";

export default function Prestations() {
  return (
    <section className="  mx-auto container flex items-center justify-between my-16 px-4">
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-8">
       
        <div className="flex justify-center mb-8 lg:mb-0">
        <Image
  src="/location-fourgon-demenagement-rs-deliv-ile-de-france.webp"
  width={400}
  height={400}
  alt="Fourgon de déménagement disponible à la location chez RS DELIV en Île-de-France"
  priority={true}
  className="rounded-lg shadow-lg w-82"
/>
        </div>

        {/* Bloc du texte */}
        <div className="text-gray-800 text-left  lg:w-1/2    flex flex-col justify-end">
          <p className="text-center text-blue-600">Services</p>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight text-center">
            Des prestations sur mesure, fiables et sécurisées :
          </h2>

      
          <ul className="lg:list-disc lg:text-left text-center pl-6">
            <li>
              <strong>Transporteur National</strong>
              <ul className="list-inside">
                <li>
                  Messagerie express : Livraison rapide et sécurisée de vos
                  colis à travers tout le pays.
                </li>
                <li>
                  Envoi urgent : Prise en charge immédiate pour les envois
                  nécessitant une livraison express.
                </li>
                <li>
                  Tournées régulières et spécifiques : Solutions adaptées aux
                  besoins récurrents et spécifiques de votre entreprise.
                </li>
              </ul>
            </li>
            <li>
              <strong>Transport et Logistique Événementielle</strong>
              <ul className="list-inside">
                <li>Récupération de stands auprès des fournisseurs.</li>
                <li>
                  Livraison sur site : Livraison fiable de matériel pour les
                  événements.
                </li>
                <li>{`Photos, vidéos, clips, et spectacles : Logistique complète pour vos événements professionnels.`}</li>
              </ul>
            </li>
            <li>
              <strong>Conciergerie & Transport de Luxe</strong>
              <ul className="list-inside">
                <li>
                  Coursier pour hôtels et palaces : Service haut de gamme.
                </li>
                <li>
                  Coursier pour marques de haute couture : Livraison soignée
                  pour le luxe.
                </li>
                <li>Livraison express sur Paris, ORLY, et Roissy CDG.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
