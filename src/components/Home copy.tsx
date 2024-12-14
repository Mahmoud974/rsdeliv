import React from "react";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/truck.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
      }}
      className=""
    >
      <div className="container mx-auto h-full">
        {/* Navbar - reste en haut */}
        <nav className="flex justify-between items-center text-white py-4">
          <h1>RsDeliv</h1>
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Qui sommes-nous</li>
            <li>Services</li>
            <li>Galerie</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* Contenu centré */}
        <div className="flex flex-col items-center justify-center h-full text-center text-white space-y-1">
          <h1 className="text-6xl font-[800] rotate-1 cursor-pointer bg-blue-600 hover:bg-black px-7 py-2">
            Transport & logistique
          </h1>
          <p className="w-1/2 mx-auto bg-blue-600 cursor-pointer hover:bg-black px-7 py-2 -rotate-1 md:text-2xl">
            Installée dans le Val-de-Marne, MC TRANSPORT est votre expert en
            transport express avec véhicules légers. Nous offrons des solutions
            rapides et fiables pour vos envois en Île-de-France et partout en
            France.
          </p>
          <p className="bg-blue-600 hover:bg-black  cursor-pointer text-2xl px-7 py-2 rotate-1">{`Livraisons à l'échelle nationale`}</p>
          <Button className="bg-blue-600 hover:bg-black cursor-pointer px-7 py-6 -rotate-2 rounded-none text-3xl">
            Demandez un devis
          </Button>
        </div>
      </div>
    </div>
  );
}
