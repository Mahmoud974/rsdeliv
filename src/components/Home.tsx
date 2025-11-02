"use client";

import React from "react";
import BlueBar from "./BlueBar";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      {/* --- BARRE SUPÉRIEURE FIXE (MOBILE + DESKTOP) --- */}
      <div className="fixed top-0 left-0 w-full z-30">
        <BlueBar />
      </div>

      {/* --- NAVBAR --- */}
      <div
        className="
          z-20 
          w-full
          sticky top-[42px] 
          bg-blue-700/90 backdrop-blur-sm
          lg:absolute lg:top-0 lg:bg-transparent lg:backdrop-blur-0
        "
      >
        <Navbar />
      </div>

      {/* --- SECTION PRINCIPALE --- */}
      <section
        className="
          relative 
          h-[80vh] sm:h-[85vh] lg:h-[100vh]
          pt-[140px] sm:pt-[160px] lg:pt-0
        "
      >
        {/* Vidéo de fond */}
        <video
          src="/transport-logistique-rs-deliv-ile-de-france.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50 -z-0" />

        {/* Contenu central */}
        <div className="relative flex flex-col justify-center items-center text-center z-10 px-4 sm:px-8 h-full">
          <div className="max-w-5xl">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              <strong>Transport</strong> & logistique à{" "}
              <strong>Paris et en Île-de-France</strong>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl text-gray-200 leading-relaxed">
              Installée dans le Val-de-Marne, <strong>ISANO</strong> est votre
              expert en{" "}
              <strong className="text-blue-500">transport location</strong>{" "}
              express. Des solutions rapides, fiables et professionnelles,
              partout en France.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
