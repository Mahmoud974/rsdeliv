"use client";

 
import {  Search } from "lucide-react";
import React, { useState } from "react";
 
import BlueBar from "./BlueBar";
import Navbar from "./Navbar";

function BookingBar() {
  const [form, setForm] = useState({
    location: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
    alert("Recherche envoyée !");
  };

  return (
    <form 
      onSubmit={onSubmit}
      className="
        w-full max-w-6xl mx-auto
        bg-blue-700 backdrop-blur-md text-white
        rounded-1xl shadow-2xl
        px-4 sm:px-6 lg:px-8 py-5
      "
      aria-label="Formulaire de réservation de véhicule"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
       
        <div className="md:col-span-2">
          <label className="text-sm text-gray-300 mb-1 block">Lieu</label>
          <input
            type="text"
            name="location"
            placeholder="Ville, aéroport, adresse..."
            value={form.location}
            onChange={onChange}
            className="w-full rounded-lg bg-gray-900/70 border border-gray-700 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        
        <div>
          <label className="text-sm text-gray-300 mb-1 block">Départ</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={onChange}
            className="w-full rounded-lg bg-gray-900/70 border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-300 mb-1 block">Heure</label>
          <input
            type="time"
            name="startTime"
            value={form.startTime}
            onChange={onChange}
            className="w-full rounded-lg bg-gray-900/70 border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        
        <div>
          <label className="text-sm text-gray-300 mb-1 block">Jusqu’au</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={onChange}
            className="w-full rounded-lg bg-gray-900/70 border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-sm text-gray-300 mb-1 block">Heure</label>
            <input
              type="time"
              name="endTime"
              value={form.endTime}
              onChange={onChange}
              className="w-full rounded-lg bg-gray-900/70 border border-gray-700 p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

   
          <button
            type="submit"
            className="
              md:self-end
              h-12 w-12 md:w-12 md:h-12
              rounded-full bg-blue-600 hover:bg-blue-700 transition
              grid place-items-center shadow-lg shrink-0
            "
            aria-label="Rechercher un véhicule"
            title="Rechercher"
          >
            <Search className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default function Home() {
 

  return (
    <>
 
      <BlueBar/>

      
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[85vh]">
        <video
          src="/transport-logistique-rs-deliv-ile-de-france.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/50 -z-0" />

    
         <Navbar/>

  
        <div className="absolute inset-0 z-10 mt-28 px-4 text-white">
          
          <div className="pt-28 sm:pt-36 lg:pt-40 max-w-5xl mx-auto text-center">
            <h1 className="text-2xl   sm:text-4xl lg:text-6xl font-extrabold">
             <strong className="">Transport</strong> & logistique à <strong>Paris et en Île-de-France</strong>
            </h1>
            <p className="mt-4 text-sm sm:text-lg lg:text-2xl leading-relaxed">
              Installée dans le Val-de-Marne, <strong>RS DELIV</strong> est votre expert
              en <strong className="text-blue-500">transport location </strong> express. Des solutions rapides, fiables et professionnelles, partout en France.
            </p>
          </div>

         
          <div className="mt-6 lg:mt-10">
            <BookingBar />
          </div>

         
        </div>
      </section>
    </>
  );
}
