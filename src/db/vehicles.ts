export interface FicheTechnique {
  palettes120x80x100: number;
  palettes120x100x100: number;
  longueurChargement: string;
  largeurChargement: string;
  largeurPassageRoues: string;
  hauteurInterieure: string;
  hauteurUtileChargement: string;
  chargeUtileStandard: string;
  volumeUtileStandard: string;
}

export interface Vehicle {
  id: number;
  img: string;
  title: string;
  categorie: string;
  volumeUtile: string;
  chargeUtile: string;
  euroPalette: number;
  transmission: "Automatique" | "Manuelle"; 
  nombrePortes: number; 
  nombrePersonnes: number;  
  ficheTechnique: FicheTechnique;
  prixParJour: number;  
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    img: "/van.webp",
    title: "Cat 04 Camionnette 4m3",
    categorie: "Fourgonette",
    volumeUtile: "2 m3",
    chargeUtile: "500 kg",
    euroPalette: 1,
    transmission: "Manuelle",
    nombrePortes: 4,
    nombrePersonnes: 2,
    ficheTechnique: {
      palettes120x80x100: 1,
      palettes120x100x100: 1,
      longueurChargement: "150 cm",
      largeurChargement: "130 cm",
      largeurPassageRoues: "105 cm",
      hauteurInterieure: "110 cm",
      hauteurUtileChargement: "105 cm",
      chargeUtileStandard: "400 kg",
      volumeUtileStandard: "2 m3",
    },
    prixParJour: 50,
  },
  {
    id: 2,
    img: "/van-1.webp",
    title: "Cat 04 Camionnette",
    categorie: "Fourgonette",
    volumeUtile: "3 m3",
    chargeUtile: "600 kg",
    euroPalette: 2,
    transmission: "Automatique",
    nombrePortes: 4,
    nombrePersonnes: 3,
    ficheTechnique: {
      palettes120x80x100: 2,
      palettes120x100x100: 2,
      longueurChargement: "160 cm",
      largeurChargement: "140 cm",
      largeurPassageRoues: "110 cm",
      hauteurInterieure: "120 cm",
      hauteurUtileChargement: "110 cm",
      chargeUtileStandard: "500 kg",
      volumeUtileStandard: "3 m3",
    },
    prixParJour: 60,
  },
  {
    id: 3,
    img: "/van-2.webp",
    title: "Cat 04 Camionnette 4m3",
    categorie: "Fourgonette",
    volumeUtile: "4 m3",
    chargeUtile: "700 kg",
    euroPalette: 2,
    transmission: "Manuelle",
    nombrePortes: 5,
    nombrePersonnes: 3,
    ficheTechnique: {
      palettes120x80x100: 2,
      palettes120x100x100: 2,
      longueurChargement: "170 cm",
      largeurChargement: "150 cm",
      largeurPassageRoues: "120 cm",
      hauteurInterieure: "130 cm",
      hauteurUtileChargement: "120 cm",
      chargeUtileStandard: "600 kg",
      volumeUtileStandard: "4 m3",
    },
    prixParJour: 70,
  },
];
