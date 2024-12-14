import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionQuestions() {
  return (
    <section className="py-12 bg-black text-white lg:px-0 px-6">
      <h3 className="text-center text-4xl font-bold mb-8">
        Questions fréquemment posées
      </h3>
      <div className="container  mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Comment passer ma première commande ?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Votre première commande se fait directement sur notre plateforme
                de devis express, avec un règlement préalable. Pour les
                commandes suivantes, une facture vous sera envoyée avec des
                modalités de paiement définies lors de votre entrée en compte.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Est-ce que vous livrez sur les salons professionnels ?
            </AccordionTrigger>
            <AccordionContent>
              {`  Oui, nous assurons la livraison sur les salons professionnels dans le
          cadre de notre service "Evénements, présentation de produits et
          manifestations itinérantes".`}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              {`Faites-vous le transport des tableaux d'art ?`}
            </AccordionTrigger>
            <AccordionContent>
              {`  Oui, nous assurons le transport de vos tableaux d'art, toiles et
          peintures avec des véhicules dédiés, dans des conditions de sécurité
          optimales. Nous prenons en charge vos œuvres directement à l'endroit
          de l'enlèvement et les livrons directement à destination, limitant
          ainsi la manipulation. Nous offrons également des services de
          protection, comme le tamponnage (3 couches de protection) et la
          réalisation de caisses adaptées pour les œuvres fragiles ou de grande
          valeur. Une assurance tous risques transport de type "ad valorem" est
          également disponible, avec un coût d'environ 145 € pour une peinture
          d'une valeur de 20 000 €.`}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Quelles sont vos offres de transport national ?
            </AccordionTrigger>
            <AccordionContent>
              Nous proposons des services de transport national, incluant des
              missions occasionnelles, de la messagerie express, des envois
              urgents, ainsi que des tournées régulières et spécifiques selon
              vos besoins.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Offrez-vous des services pour les événements professionnels ?
            </AccordionTrigger>
            <AccordionContent>
              {` Oui, nous proposons des services pour les événements professionnels,
          incluant la récupération de stands auprès des fournisseurs, la
          livraison sur site, ainsi que l'organisation de séminaires, de studios
          de production photos et vidéos, de clips et de spectacles.`}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Faites-vous du transport de luxe ?
            </AccordionTrigger>
            <AccordionContent>
              Oui, nous offrons des services de conciergerie et de transport de
              luxe, notamment pour les hôtels et palaces, ainsi que pour les
              marques de haute couture. Nous assurons également des livraisons
              express sur Paris ORLY et Roissy CDG.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
