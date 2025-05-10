import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Printer,
  MapPin,
  Car,
  Bus,
  Road,
  Truck
} from "lucide-react";

const TransportRoadsPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeCategory, setActiveCategory] = useState("roads");
  const navigate = useNavigate();
  const location = useLocation();

  // Handle language change to stay on Transport & Roads page
  useEffect(() => {
    const getLocalizedPath = () => {
      return currentLang === "en" ? "/en/facilities/transport-roads" : "/fr/installations/transport-routes";
    };

    const expectedPath = getLocalizedPath();
    if (location.pathname !== expectedPath) {
      navigate(expectedPath, { replace: true });
    }
  }, [currentLang, navigate, location.pathname]);

  const categories = [
    {
      id: "roads",
      name: currentLang === "en" ? "Major Roads" : "Routes Principales",
      icon: <Road className="h-5 w-5 text-yellow-400" />,
    },
    {
      id: "public",
      name: currentLang === "en" ? "Public Transport" : "Transport Public",
      icon: <Bus className="h-5 w-5 text-green-500" />,
    },
    {
      id: "private",
      name: currentLang === "en" ? "Private Transport" : "Transport Privé",
      icon: <Car className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "cargo",
      name: currentLang === "en" ? "Cargo & Logistics" : "Fret et Logistique",
      icon: <Truck className="h-5 w-5 text-purple-600" />,
    },
  ];

  const facilities = [
    // Roads
    {
      id: 1,
      category: "roads",
      name: "Route Nationale N2",
      nameEn: "National Road N2",
      description:
        currentLang === "en"
          ? "Major highway connecting Mbalmayo to Yaoundé and southern regions."
          : "Axe routier majeur reliant Mbalmayo à Yaoundé et aux régions du sud.",
      type: currentLang === "en" ? "National Highway" : "Route Nationale",
      status: currentLang === "en" ? "Operational" : "Opérationnel",
      contact: {
        email: "roads.maintenance@mbalmayo.cm",
        phone: "+237 677 123 456",
        Printer: "+237 222 987 654",
        location: currentLang === "en" ? "North-South Axis" : "Axe Nord-Sud",
      },
    },
    {
      id: 2,
      category: "roads",
      name: "Boulevard Central",
      nameEn: "Central Boulevard",
      description:
        currentLang === "en"
          ? "Main urban artery through downtown Mbalmayo with commercial zones."
          : "Artère urbaine principale traversant le centre-ville de Mbalmayo avec zones commerciales.",
      type: currentLang === "en" ? "Urban Road" : "Route Urbaine",
      status: currentLang === "en" ? "Maintained" : "Entretenue",
      contact: {
        email: "urban.roads@mbalmayo.cm",
        phone: "+237 677 234 567",
        Printer: "+237 222 345 678",
        location: currentLang === "en" ? "City Center" : "Centre-ville",
      },
    },
    // Public Transport
    {
      id: 3,
      category: "public",
      name: "Gare Routière Centrale",
      nameEn: "Central Bus Station",
      description:
        currentLang === "en"
          ? "Main bus terminal serving intercity routes and local transportation."
          : "Terminal principal desservant les routes intercités et le transport local.",
      type: currentLang === "en" ? "Bus Terminal" : "Gare Routière",
      status: currentLang === "en" ? "Active" : "Actif",
      contact: {
        email: "bus.station@mbalmayo.cm",
        phone: "+237 677 345 678",
        Printer: "+237 222 456 789",
        location: currentLang === "en" ? "Downtown" : "Centre-ville",
      },
    },
    {
      id: 4,
      category: "public",
      name: "Service de Taxi Municipal",
      nameEn: "Municipal Taxi Service",
      description:
        currentLang === "en"
          ? "Official city taxi service with regulated fares and routes."
          : "Service de taxi officiel de la ville avec tarifs et itinéraires réglementés.",
      type: currentLang === "en" ? "Taxi Service" : "Service de Taxi",
      status: currentLang === "en" ? "Operating" : "En service",
      contact: {
        email: "taxi.service@mbalmayo.cm",
        phone: "+237 677 456 789",
        Printer: "+237 222 567 890",
        location: currentLang === "en" ? "Multiple Locations" : "Plusieurs Emplacements",
      },
    },
    // Private Transport
    {
      id: 5,
      category: "private",
      name: "Association des Transporteurs Privés",
      nameEn: "Private Transporters Association",
      description:
        currentLang === "en"
          ? "Organization of private transport operators serving the city."
          : "Organisation des opérateurs de transport privé desservant la ville.",
      type: currentLang === "en" ? "Private Association" : "Association Privée",
      status: currentLang === "en" ? "Active" : "Actif",
      contact: {
        email: "private.transport@mbalmayo.cm",
        phone: "+237 677 567 890",
        Printer: "+237 222 678 901",
        location: currentLang === "en" ? "Business District" : "Quartier des Affaires",
      },
    },
    // Cargo & Logistics
    {
      id: 6,
      category: "cargo",
      name: "Centre Logistique de Mbalmayo",
      nameEn: "Mbalmayo Logistics Center",
      description:
        currentLang === "en"
          ? "Major logistics hub handling cargo and freight operations."
          : "Centre logistique majeur gérant les opérations de fret et de marchandises.",
      type: currentLang === "en" ? "Logistics Center" : "Centre Logistique",
      status: currentLang === "en" ? "Operational" : "Opérationnel",
      contact: {
        email: "logistics.center@mbalmayo.cm",
        phone: "+237 677 678 901",
        Printer: "+237 222 789 012",
        location: currentLang === "en" ? "Industrial Zone" : "Zone Industrielle",
      },
    },
  ];

  return (
    <div className="py-12 md:py-16 bg-neutral-50">
      <div className="container-custom">
        <h1 className="mb-8 text-4xl font-bold text-neutral-900 md:text-5xl">
          {currentLang === "en"
            ? "Transport & Roads Infrastructure"
            : "Infrastructure de Transport et Routes"}
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
                <h3 className="mb-3 text-2xl font-semibold text-neutral-900">
                  {currentLang === "en" ? facility.nameEn : facility.name}
                </h3>
                <p className="mb-4 text-neutral-600 leading-relaxed">{facility.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                    {facility.type}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {facility.status}
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
                    <Printer className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{facility.contact.Printer}</span>
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

export default TransportRoadsPage;