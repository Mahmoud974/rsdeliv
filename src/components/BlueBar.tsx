import { Facebook, Instagram, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BlueBar() {
  return (
    <div className="bg-blue-700 text-white text-sm">
      <div className="container mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-3 sm:gap-4 py-2 px-4 sm:px-6 text-center sm:text-left">
        
        {/* Réseaux sociaux */}
        <ul className="flex gap-3 sm:gap-5 items-center">
          <li>
            <Link
              href="https://facebook.com"
              aria-label="réseau social Facebook pour ISANO"
              className="hover:text-gray-300 transition"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </li>
          <li>
            <Link
              href="https://instagram.com"
              aria-label="réseau social Instagram pour ISANO"
              className="hover:text-gray-300 transition"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </li>
        </ul>

        {/* Téléphone */}
        <div className="flex items-center gap-2 text-base sm:text-lg font-semibold">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          <a href="tel:0230882506" className="hover:text-gray-300 transition">
            02.30.88.25.06
          </a>
        </div>
      </div>
    </div>
  );
}
