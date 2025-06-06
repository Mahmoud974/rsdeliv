import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Section principale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {/* Section 1: À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p>
              {`Nous sommes une société spécialisée dans le transport express. Nos
              services sont adaptés à vos besoins spécifiques, qu'il s'agisse de
              transport de marchandises, de messagerie express ou de solutions
              événementielles.`}
            </p>
          </div>

          {/* Section 2: Liens utiles */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>{`Vous avez une question ? N'hésitez pas à nous contacter.`}</p>
            <ul className="space-y-2 flex flex-col lg:justify-start lg:items-start justify-center mt-2 items-center">
              <li className="flex items-center lg:items-start lg:justify-start   gap-2">
                <span className="font-semibold">
                  <Mail />
                </span>
                contact@rsdeliv.com
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="font-semibold">
                  <Phone />
                </span>
                01 23 45 67 89
              </li>
            </ul>
          </div>

          {/* Section 4: Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <ul className="flex lg:justify-start lg:items-start items-center justify-center    gap-4">
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mentions légales, politique de confidentialité et cookies */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm">
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-center lg:justify-between text-center lg:text-left">
            <div>
              <a href="#" className="hover:underline text-gray-400">
                Mentions légales
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:underline text-gray-400">
                Politique de confidentialité
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:underline text-gray-400">
                Paramètres des cookies
              </a>
            </div>
            <div className="text-gray-400">
              © 2024 RS Deliv. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
