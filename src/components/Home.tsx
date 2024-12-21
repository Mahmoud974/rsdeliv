"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { Facebook, Instagram, Phone, SquareMenu } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Section de réseaux sociaux */}
      <div className="bg-blue-700 lg:px-6 h-auto text-white">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="text-white hover:text-gray-300 transition">
                <Facebook className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 transition">
                <Instagram className="w-6 h-6" />
              </a>
            </li>
          </ul>
          <ul className="flex gap-6 items-center">
            <li className="  text-center font-medium">
              <p className="text-xs">Notre siège social</p>
              <div className="flex  gap-1  justify-center">
                <span className="font-normal  ">à</span>
                <p className="font-bold  underline">PARIS</p>
              </div>
            </li>
            <li className="flex items-center gap-1 text-lg font-semibold">
              <Phone className="w-5 h-5" />
              <a href="tel:0230882506">02.30.88.25.06</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Section vidéo */}
      <div className="relative h-auto lg:pb-0 pb-32 lg:h-[100vh]">
        <video
          src="/bg.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenu au-dessus de la vidéo */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white space-y-4 relative z-10">
          {/* Navbar */}
          <nav className="flex justify-between items-center py-4 w-full px-8">
            <Image
              src="/logo.png"
              alt="logo RS DELIV"
              width={1000}
              height={1000}
              className="w-24 md:w-32"
            />
            <ul className="hidden lg:flex gap-8">
              <li>Home</li>
              <li>Qui sommes-nous</li>
              <li>Services</li>
              <li>Galerie</li>
              <li>Contact</li>
            </ul>
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                  <SquareMenu />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <SheetDescription></SheetDescription>
                  <ul className="flex flex-col gap-4">
                    <li>Home</li>
                    <li>Qui sommes-nous</li>
                    <li>Services</li>
                    <li>Galerie</li>
                    <li>Contact</li>
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </nav>

          {/* Texte centré */}
          <div className="flex flex-col items-center justify-center h-full text-center text-white space-y-4 px-4">
            <h1 className="lg:text-6xl text-2xl font-bold bg-blue-600 hover:bg-black px-7 py-2 transform rotate-2">
              Transport & logistique
            </h1>
            <p className="lg:w-1/2 mx-auto bg-blue-600 hover:bg-black px-7 py-2 transform -rotate-1 lg:text-2xl text-xl">
              Installée dans le Val-de-Marne, MC TRANSPORT est votre expert en
              transport express avec véhicules légers. Nous offrons des
              solutions rapides et fiables pour vos envois en Île-de-France et
              partout en France.
            </p>
            <Button className="bg-blue-600 hover:bg-black cursor-pointer px-7 py-6 transform rotate-3 rounded-none text-3xl">
              Demandez un devis
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
