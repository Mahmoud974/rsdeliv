import React from "react";

const features = [
  {
    title: "Les produits réfrigérés et à température ambiante",
    icon: "🧊", // Remplace par ton icône
  },
  {
    title: "Les marchandises de grande valeur",
    icon: "💰", // Remplace par ton icône
  },
  {
    title: "Les cargaisons sensibles et périssables",
    icon: "🌿", // Remplace par ton icône
  },
  {
    title: "Les marchandises fragiles",
    icon: "📦", // Remplace par ton icône
  },
  {
    title: "Les marchandises dangereuses",
    icon: "☣️", // Remplace par ton icône
  },
  {
    title: "Les livraisons urgentes",
    icon: "🚚", // Remplace par ton icône
  },
];

const Questions = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-center">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          En savoir plus sur nos services de transport dédiés aux projets
        </a>
      </div>
    </section>
  );
};

export default Questions;
