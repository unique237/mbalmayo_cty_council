import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Printer,
  MapPin,
  Building,
  Heart,
  Stethoscope,
  FirstAid
} from "lucide-react";

const HealthCentersPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeCategory, setActiveCategory] = useState("hospitals");
  const navigate = useNavigate();
  const location = useLocation();

  // Handle language change to stay on Health Centers page
  useEffect(() => {
    const getLocalizedPath = () => {
      return currentLang === "en" ? "/en/facilities/centres-sante" : "/fr/installations/centres-sante";
    };

    const expectedPath = getLocalizedPath();
    if (location.pathname !== expectedPath) {
      navigate(expectedPath, { replace: true });
    }
  }, [currentLang, navigate, location.pathname]);

  const categories = [
    {
      id: "hospitals",
      name: currentLang === "en" ? "Hospitals" : "Hôpitaux",
      icon: <Building className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "clinics",
      name: currentLang === "en" ? "Clinics" : "Cliniques",
      icon: <Heart className="h-5 w-5 text-red-500" />,
    },
    {
      id: "healthcenters",
      name: currentLang === "en" ? "Health Centers" : "Centres de Santé",
      icon: <FirstAid className="h-5 w-5 text-green-500" />,
    },
  ];

  const facilities = [
    // Hospitals
    {
      id: 1,
      category: "hospitals",
      name: "Hôpital de District de Mbalmayo",
      nameEn: "Mbalmayo District Hospital",
      description:
        currentLang === "en"
          ? "Main public hospital serving the Mbalmayo district with comprehensive medical services."
          : "Principal hôpital public desservant le district de Mbalmayo avec des services médicaux complets.",
      type: currentLang === "en" ? "Public" : "Public",
      services: currentLang === "en" ? "General Medicine, Surgery, Maternity" : "Médecine Générale, Chirurgie, Maternité",
      contact: {
        email: "district.hospital@mbalmayo.cm",
        phone: "+237 677 123 456",
        Printer: "+237 222 987 654",
        location: currentLang === "en" ? "Central Mbalmayo" : "Mbalmayo Centre",
      },
    },
    {
      id: 2,
      category: "hospitals",
      name: "Hôpital Saint-Martin",
      nameEn: "Saint Martin Hospital",
      description:
        currentLang === "en"
          ? "Private Catholic hospital known for quality healthcare and specialized services."
          : "Hôpital catholique privé reconnu pour ses soins de qualité et ses services spécialisés.",
      type: currentLang === "en" ? "Private" : "Privé",
      services: currentLang === "en" ? "Specialized Care, Pediatrics, Cardiology" : "Soins Spécialisés, Pédiatrie, Cardiologie",
      contact: {
        email: "stmartin@mbalmayo.cm",
        phone: "+237 677 234 567",
        Printer: "+237 222 876 543",
        location: currentLang === "en" ? "Mbalmayo North" : "Mbalmayo Nord",
      },
    },
    // Clinics
    {
      id: 3,
      category: "clinics",
      name: "Clinique La Vie",
      nameEn: "La Vie Clinic",
      description:
        currentLang === "en"
          ? "Modern clinic offering specialized medical consultations and outpatient services."
          : "Clinique moderne offrant des consultations médicales spécialisées et des services ambulatoires.",
      type: currentLang === "en" ? "Private" : "Privé",
      services: currentLang === "en" ? "Consultations, Laboratory, Imaging" : "Consultations, Laboratoire, Imagerie",
      contact: {
        email: "lavie@mbalmayo.cm",
        phone: "+237 677 345 678",
        Printer: "+237 222 765 432",
        location: currentLang === "en" ? "Mbalmayo East" : "Mbalmayo Est",
      },
    },
    {
      id: 4,
      category: "clinics",
      name: "Clinique Moderne",
      nameEn: "Modern Clinic",
      description:
        currentLang === "en"
          ? "Well-equipped clinic providing quality healthcare services and emergency care."
          : "Clinique bien équipée offrant des services de santé de qualité et des soins d'urgence.",
      type: currentLang === "en" ? "Private" : "Privé",
      services: currentLang === "en" ? "Emergency Care, General Medicine" : "Soins d'Urgence, Médecine Générale",
      contact: {
        email: "moderne@mbalmayo.cm",
        phone: "+237 677 456 789",
        Printer: "+237 222 654 321",
        location: currentLang === "en" ? "Mbalmayo West" : "Mbalmayo Ouest",
      },
    },
    // Health Centers
    {
      id: 5,
      category: "healthcenters",
      name: "Centre de Santé Intégré",
      nameEn: "Integrated Health Center",
      description:
        currentLang === "en"
          ? "Community health center providing basic healthcare and preventive services."
          : "Centre de santé communautaire offrant des soins de base et des services préventifs.",
      type: currentLang === "en" ? "Public" : "Public",
      services: currentLang === "en" ? "Primary Care, Vaccinations, Family Planning" : "Soins Primaires, Vaccinations, Planning Familial",
      contact: {
        email: "csi@mbalmayo.cm",
        phone: "+237 677 567 890",
        Printer: "+237 222 543 210",
        location: currentLang === "en" ? "Mbalmayo South" : "Mbalmayo Sud",
      },
    },
    {
      id: 6,
      category: "healthcenters",
      name: "Centre Médico-Social",
      nameEn: "Medical-Social Center",
      description:
        currentLang === "en"
          ? "Social healthcare center focusing on community wellness and preventive care."
          : "Centre de santé social axé sur le bien-être communautaire et les soins préventifs.",
      type: currentLang === "en" ? "Public" : "Public",
      services: currentLang === "en" ? "Social Medicine, Community Health" : "Médecine Sociale, Santé Communautaire",
      contact: {
        email: "cms@mbalmayo.cm",
        phone: "+237 677 678 901",
        Printer: "+237 222 432 109",
        location: currentLang === "en" ? "Mbalmayo Central" : "Mbalmayo Centre",
      },
    },
  ];

  return (
    <div className="py-12 md:py-16 bg-neutral-50">
      <div className="container-custom">
        <h1 className="mb-8 text-4xl font-bold text-neutral-900 md:text-5xl">
          {currentLang === "en"
            ? "Health Facilities in Mbalmayo"
            : "Établissements de Santé à Mbalmayo"}
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

export default HealthCentersPage;