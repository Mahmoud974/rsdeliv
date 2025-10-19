"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SquareMenu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 sm:px-6 text-white">
        <Image
          src="/logo-rs-deliv-transport-logistique.webp"
          alt="Logo RS DELIV, entreprise de transport et logistique en Île-de-France"
          width={1000}
          height={1000}
          
          className="w-20 sm:w-28 md:w-32"
          priority
        />

        <ul className="hidden lg:flex gap-8 text-lg">
          {["Accueil", "Qui sommes-nous", "Services", "Contact", "FAQ"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-gray-300 transition hover:bg-blue-600 px-3 py-1 rounded"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

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
  );
}