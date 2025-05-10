import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Users,
  BadgeAlert
} from "lucide-react";

const SecurityServicesPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeCategory, setActiveCategory] = useState("police");
  const navigate = useNavigate();
  const location = useLocation();

  // Handle language change to stay on Security Services page
  useEffect(() => {
    const getLocalizedPath = () => {
      return currentLang === "en" ? "/en/facilities/security-services" : "/fr/installations/services-securite";
    };

    const expectedPath = getLocalizedPath();
    if (location.pathname !== expectedPath) {
      navigate(expectedPath, { replace: true });
    }
  }, [currentLang, navigate, location.pathname]);

  const categories = [
    {
      id: "police",
      name: currentLang === "en" ? "Police Stations" : "Postes de Police",
      icon: <Shield className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "gendarmerie",
      name: currentLang === "en" ? "Gendarmerie" : "Gendarmerie",
      icon: <BadgeAlert className="h-5 w-5 text-green-500" />,
    },
    {
      id: "municipal",
      name: currentLang === "en" ? "Municipal Police" : "Police Municipale",
      icon: <Users className="h-5 w-5 text-red-500" />,
    },
  ];

  const facilities = [
    // Police Stations
    {
      id: 1,
      category: "police",
      name: "Commissariat Central de Mbalmayo",
      nameEn: "Mbalmayo Central Police Station",
      description:
        currentLang === "en"
          ? "Main police station serving the central district with 24/7 operations."
          : "Commissariat principal desservant le district central avec des opérations 24h/24.",
      type: currentLang === "en" ? "Central Station" : "Commissariat Central",
      services: currentLang === "en" ? "General Police Services, Investigations" : "Services de Police Généraux, Enquêtes",
      image: "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746351445/Mbalmayo/b6fp5ep3kb3cj2yxahv9.jpg",
      contact: {
        email: "central.police@mbalmayo.cm",
        phone: "+237 677 111 222",
        location: currentLang === "en" ? "Downtown Mbalmayo" : "Centre-ville de Mbalmayo",
      },
    },
    {
      id: 2,
      category: "police",
      name: "Poste de Police du Quartier Nord",
      nameEn: "North District Police Station",
      description:
        currentLang === "en"
          ? "Police station covering the northern residential areas of Mbalmayo."
          : "Poste de police couvrant les zones résidentielles du nord de Mbalmayo.",
      type: currentLang === "en" ? "District Station" : "Poste de District",
      services: currentLang === "en" ? "Community Policing, Patrols" : "Police de Proximité, Patrouilles",
      image: "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746351445/Mbalmayo/b6fp5ep3kb3cj2yxahv9.jpg",
      contact: {
        email: "north.police@mbalmayo.cm",
        phone: "+237 677 333 444",
        location: currentLang === "en" ? "North Mbalmayo" : "Mbalmayo Nord",
      },
    },
    // Gendarmerie Brigades
    {
      id: 3,
      category: "gendarmerie",
      name: "Brigade de Gendarmerie Principale",
      nameEn: "Main Gendarmerie Brigade",
      description:
        currentLang === "en"
          ? "Primary gendarmerie unit responsible for territorial security and major operations."
          : "Unité principale de gendarmerie responsable de la sécurité territoriale et des opérations majeures.",
      type: currentLang === "en" ? "Main Brigade" : "Brigade Principale",
      services: currentLang === "en" ? "Territorial Security, Special Operations" : "Sécurité Territoriale, Opérations Spéciales",
      image: "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746351445/Mbalmayo/b6fp5ep3kb3cj2yxahv9.jpg",
      contact: {
        email: "gendarmerie.main@mbalmayo.cm",
        phone: "+237 677 555 666",
        location: currentLang === "en" ? "East Mbalmayo" : "Mbalmayo Est",
      },
    },
    {
      id: 4,
      category: "gendarmerie",
      name: "Brigade de Gendarmerie Mobile",
      nameEn: "Mobile Gendarmerie Brigade",
      description:
        currentLang === "en"
          ? "Specialized mobile unit for rapid intervention and rural area security."
          : "Unité mobile spécialisée pour l'intervention rapide et la sécurité des zones rurales.",
      type: currentLang === "en" ? "Mobile Unit" : "Unité Mobile",
      services: currentLang === "en" ? "Rapid Response, Rural Patrols" : "Intervention Rapide, Patrouilles Rurales",
      image: "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746351445/Mbalmayo/b6fp5ep3kb3cj2yxahv9.jpg",
      contact: {
        email: "gendarmerie.mobile@mbalmayo.cm",
        phone: "+237 677 777 888",
        location: currentLang === "en" ? "West Mbalmayo" : "Mbalmayo Ouest",
      },
    },
    // Municipal Police
    {
      id: 5,
      category: "municipal",
      name: "Police Municipale de Mbalmayo",
      nameEn: "Mbalmayo Municipal Police",
      description:
        currentLang === "en"
          ? "City law enforcement unit focusing on urban security and municipal regulations."
          : "Unité de police municipale concentrée sur la sécurité urbaine et les règlements municipaux.",
      type: currentLang === "en" ? "Municipal Force" : "Force Municipale",
      services: currentLang === "en" ? "Urban Security, Traffic Control" : "Sécurité Urbaine, Contrôle de la Circulation",
      image: "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746351445/Mbalmayo/b6fp5ep3kb3cj2yxahv9.jpg",
      contact: {
        email: "municipal.police@mbalmayo.cm",
        phone: "+237 677 999 000",
        location: currentLang === "en" ? "City Hall District" : "Quartier de l'Hôtel de Ville",
      },
    },
  ];

  return (
    <div className="py-12 md:py-16 bg-neutral-50">
      <div className="container-custom">
        <h1 className="mb-8 text-4xl font-bold text-neutral-900 md:text-5xl">
          {currentLang === "en"
            ? "Security Services in Mbalmayo"
            : "Services de Sécurité à Mbalmayo"}
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

        {/* Facilities Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities
            .filter((facility) => facility.category === activeCategory)
            .map((facility) => (
              <div
                key={facility.id}
                className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={facility.image}
                    alt={currentLang === "en" ? facility.nameEn : facility.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <h3 className="mb-3 text-2xl font-semibold text-neutral-900">
                  {currentLang === "en" ? facility.nameEn : facility.name}
                </h3>
                <p className="mb-4 text-neutral-600 leading-relaxed">{facility.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                    {facility.type}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {facility.services}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-neutral-600">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{facility.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{facility.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-green-500" />
                    <span>{facility.contact.location}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityServicesPage;