"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { Facebook, Instagram, Phone, SquareMenu, Search } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

        {/* Départ (date + heure) */}
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Barre top */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto flex justify-between items-center py-2 lg:px-6">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                <Facebook className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                <Instagram className="w-6 h-6" />
              </a>
            </li>
          </ul>
          <ul className="flex gap-6 items-center">
            <li className="text-center font-medium">
              <p className="text-xs">Notre siège social</p>
              <div className="flex gap-1 justify-center">
                <span className="font-normal">à</span>
                <p className="font-bold underline">PARIS</p>
              </div>
            </li>
            <li className="flex items-center gap-1 text-lg font-semibold">
              <Phone className="w-5 h-5" />
              <a href="tel:0230882506" className="hover:text-gray-300 transition">
                02.30.88.25.06
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* HERO avec vidéo + NAV + BookingBar en overlay */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[85vh]">
        <video
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/50 -z-0" />

        {/* NAV overlay */}
        <nav className="absolute top-0 left-0 w-full z-20">
          <div className="container mx-auto flex justify-between items-center py-3 px-4 sm:px-6 text-white">
            <Image
              src="/logo.png"
              alt="logo RS DELIV"
              width={1000}
              height={1000}
              className="w-20 sm:w-28 md:w-32"
              priority
            />

            <ul className="hidden lg:flex gap-8 text-lg">
              {["Accueil", "Qui sommes-nous", "Services", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-gray-300 transition hover:bg-blue-600 px-3 py-1 rounded"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <Button>Réserver</Button>

            {/* Mobile */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger aria-label="Ouvrir le menu">
                  <SquareMenu className="w-7 h-7" />
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription />
                  </SheetHeader>
                  <ul className="flex flex-col gap-4 mt-4 text-lg">
                    {["Accueil", "Qui sommes-nous", "Services", "Contact", "FAQ"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-600 transition"
                          >
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>

  
        <div className="absolute inset-0 z-10 mt-28 px-4 text-white">
          
          <div className="pt-28 sm:pt-36 lg:pt-40 max-w-5xl mx-auto text-center">
            <h1 className="text-2xl   sm:text-4xl lg:text-6xl font-extrabold">
              Transport & logistique à Paris et en Île-de-France
            </h1>
            <p className="mt-4 text-sm sm:text-lg lg:text-2xl leading-relaxed">
              Installée dans le Val-de-Marne, <strong>RS DELIV</strong> est votre expert
              en transport express. Des solutions rapides, fiables et professionnelles, partout en France.
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
