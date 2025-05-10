import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Store,
  ShoppingCart,
  Building2,
  Building,
} from "lucide-react";

const MarketsPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeCategory, setActiveCategory] = useState("traditional");
  const navigate = useNavigate();
  const location = useLocation();

  // Handle language change to stay on Markets page
  useEffect(() => {
    const getLocalizedPath = () => {
      return currentLang === "en" ? "/en/facilities/markets" : "/fr/installations/marches";
    };

    const expectedPath = getLocalizedPath();
    if (location.pathname !== expectedPath) {
      navigate(expectedPath, { replace: true });
    }
  }, [currentLang, navigate, location.pathname]);

  const categories = [
    {
      id: "traditional",
      name: currentLang === "en" ? "Traditional Markets" : "Marchés Traditionnels",
      icon: <Store className="h-5 w-5 text-yellow-400" />,
    },
    {
      id: "supermarket",
      name: currentLang === "en" ? "Supermarkets" : "Supermarchés",
      icon: <ShoppingCart className="h-5 w-5 text-green-500" />,
    },
    {
      id: "specialty",
      name: currentLang === "en" ? "Specialty Shops" : "Boutiques Spécialisées",
      icon: <Building2 className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "wholesale",
      name: currentLang === "en" ? "Wholesale Markets" : "Marchés de Gros",
      icon: <Building className="h-5 w-5 text-purple-600" />,
    },
  ];

  const markets = [
    // Traditional Markets
    {
      id: 1,
      category: "traditional",
      name: "Marché Central de Mbalmayo",
      nameEn: "Mbalmayo Central Market",
      description:
        currentLang === "en"
          ? "The main traditional market offering fresh produce, meat, fish, and local goods."
          : "Le marché traditionnel principal proposant des produits frais, viande, poisson et produits locaux.",
      type: currentLang === "en" ? "Public Market" : "Marché Public",
      openingHours: "06:00 - 18:00",
      contact: {
        email: "marche.central@mbalmayo.cm",
        phone: "+237 677 123 456",
        location: currentLang === "en" ? "City Center" : "Centre Ville",
      },
    },
    {
      id: 2,
      category: "traditional",
      name: "Marché du Quartier Nord",
      nameEn: "North District Market",
      description:
        currentLang === "en"
          ? "Neighborhood market known for its variety of fresh vegetables and fruits."
          : "Marché de quartier connu pour sa variété de légumes et fruits frais.",
      type: currentLang === "en" ? "Public Market" : "Marché Public",
      openingHours: "07:00 - 17:00",
      contact: {
        email: "marche.nord@mbalmayo.cm",
        phone: "+237 677 234 567",
        location: currentLang === "en" ? "North District" : "Quartier Nord",
      },
    },
    // Supermarkets
    {
      id: 3,
      category: "supermarket",
      name: "Super Marché Express",
      nameEn: "Express Supermarket",
      description:
        currentLang === "en"
          ? "Modern supermarket offering a wide range of local and imported products."
          : "Supermarché moderne offrant une large gamme de produits locaux et importés.",
      type: currentLang === "en" ? "Supermarket" : "Supermarché",
      openingHours: "08:00 - 21:00",
      contact: {
        email: "express@mbalmayo.cm",
        phone: "+237 677 345 678",
        location: currentLang === "en" ? "Main Street" : "Rue Principale",
      },
    },
    {
      id: 4,
      category: "supermarket",
      name: "Mbalmayo Shopping Center",
      nameEn: "Mbalmayo Shopping Center",
      description:
        currentLang === "en"
          ? "Large retail center with diverse shopping options and parking facilities."
          : "Grand centre commercial avec diverses options d'achats et parking.",
      type: currentLang === "en" ? "Shopping Mall" : "Centre Commercial",
      openingHours: "09:00 - 22:00",
      contact: {
        email: "shopping.center@mbalmayo.cm",
        phone: "+237 677 456 789",
        location: currentLang === "en" ? "Commercial Zone" : "Zone Commerciale",
      },
    },
    // Specialty Shops
    {
      id: 5,
      category: "specialty",
      name: "Artisanat Local",
      nameEn: "Local Crafts Market",
      description:
        currentLang === "en"
          ? "Specialized market for local crafts, artwork, and traditional items."
          : "Marché spécialisé pour l'artisanat local, l'art et les objets traditionnels.",
      type: currentLang === "en" ? "Specialty Market" : "Marché Spécialisé",
      openingHours: "10:00 - 19:00",
      contact: {
        email: "artisanat@mbalmayo.cm",
        phone: "+237 677 567 890",
        location: currentLang === "en" ? "Cultural District" : "Quartier Culturel",
      },
    },
    {
      id: 6,
      category: "specialty",
      name: "Marché aux Épices",
      nameEn: "Spice Market",
      description:
        currentLang === "en"
          ? "Specialized market featuring local and imported spices and seasonings."
          : "Marché spécialisé proposant des épices locales et importées.",
      type: currentLang === "en" ? "Specialty Market" : "Marché Spécialisé",
      openingHours: "08:00 - 18:00",
      contact: {
        email: "epices@mbalmayo.cm",
        phone: "+237 677 678 901",
        location: currentLang === "en" ? "East District" : "Quartier Est",
      },
    },
    // Wholesale Markets
    {
      id: 7,
      category: "wholesale",
      name: "Marché de Gros Agricole",
      nameEn: "Agricultural Wholesale Market",
      description:
        currentLang === "en"
          ? "Major wholesale market for agricultural products and foodstuffs."
          : "Grand marché de gros pour les produits agricoles et alimentaires.",
      type: currentLang === "en" ? "Wholesale Market" : "Marché de Gros",
      openingHours: "04:00 - 14:00",
      contact: {
        email: "gros.agricole@mbalmayo.cm",
        phone: "+237 677 789 012",
        location: currentLang === "en" ? "Industrial Zone" : "Zone Industrielle",
      },
    },
    {
      id: 8,
      category: "wholesale",
      name: "Centre de Distribution",
      nameEn: "Distribution Center",
      description:
        currentLang === "en"
          ? "Modern distribution center for retailers and businesses."
          : "Centre de distribution moderne pour détaillants et entreprises.",
      type: currentLang === "en" ? "Distribution Center" : "Centre de Distribution",
      openingHours: "05:00 - 16:00",
      contact: {
        email: "distribution@mbalmayo.cm",
        phone: "+237 677 890 123",
        location: currentLang === "en" ? "South District" : "Quartier Sud",
      },
    },
  ];

  return (
    <div className="py-12 md:py-16 bg-neutral-50">
      <div className="container-custom">
        <h1 className="mb-8 text-4xl font-bold text-neutral-900 md:text-5xl">
          {currentLang === "en" ? "Markets in Mbalmayo" : "Marchés à Mbalmayo"}
        </h1>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-primary-100 text-white shadow-md"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Markets Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {markets
            .filter((market) => market.category === activeCategory)
            .map((market) => (
              <div
                key={market.id}
                className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="mb-3 text-2xl font-semibold text-neutral-900">
                  {currentLang === "en" ? market.nameEn : market.name}
                </h3>
                <p className="mb-4 text-neutral-600 leading-relaxed">{market.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                    {market.type}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-neutral-600">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{market.openingHours}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{market.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{market.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-green-500" />
                    <span>{market.contact.location}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MarketsPage;