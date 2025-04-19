interface Services {
  id_service: number;
  service_name: string;
  description: string;
}
export const services: Services[] = [
  {
    id_service: 1,
    service_name: "Livraison à 1 personne",
    description:
      "Plus qu'un simple livreur, notre chauffeur deviendra un ambassadeur de votre marque car c'est à ce moment précis que l'acte d’achat se concrétise.",
  },
  {
    id_service: 2,
    service_name: "Livraison à 2 personnes",
    description:
      "Bien que nos chauffeurs soient très forts, nous utiliserons toujours au moins deux chauffeurs pour la livraison de produits volumineux (meubles).",
  },
  {
    id_service: 3,
    service_name: "Logistique",
    description:
      "Vous avez besoin d'une solution logistique ou de stockage, faites-le nous savoir.",
  },
  {
    id_service: 4,
    service_name: "Livraison Soir et Week-end",
    description: "Nous trouverons toujours une heure pour vous livrer.",
  },
  {
    id_service: 5,
    service_name: "Express",
    description:
      "Si vos clients sont pressés, nous pouvons proposer du same-day delivery.",
  },
  {
    id_service: 6,
    service_name: "Course à course",
    description:
      "Qu’il s’agisse de colis d’entreprise ou de particulier, tous sont livrés dans les plus brefs délais par un coursier express (moto, voiture, camionnette).",
  },
];
