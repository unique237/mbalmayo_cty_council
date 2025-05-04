import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  Printer,
  MapPin,
  Building,
  GraduationCap,
  School,
  BookOpen,
} from "lucide-react";

const SchoolsPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeCategory, setActiveCategory] = useState("basic");
  const navigate = useNavigate();
  const location = useLocation();

  // Handle language change to stay on Schools page
  useEffect(() => {
    const getLocalizedPath = () => {
      return currentLang === "en" ? "/en/facilities/schools" : "/fr/installations/ecoles";
    };

    // Only navigate if the current path doesn't match the expected Schools page path
    const expectedPath = getLocalizedPath();
    if (location.pathname !== expectedPath) {
      navigate(expectedPath, { replace: true });
    }
  }, [currentLang, navigate, location.pathname]);

  const categories = [
    {
      id: "basic",
      name: currentLang === "en" ? "Basic Education" : "Éducation de Base",
      icon: <BookOpen className="h-5 w-5 text-yellow-400" />,
    },
    {
      id: "secondary",
      name: currentLang === "en" ? "Secondary Education" : "Éducation Secondaire",
      icon: <School className="h-5 w-5 text-green-500" />,
    },
    {
      id: "professional",
      name: currentLang === "en" ? "Vocational & Professional Education" : "Formation Professionnelle",
      icon: <Building className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "higher",
      name: currentLang === "en" ? "Higher Education" : "Enseignement Supérieur",
      icon: <GraduationCap className="h-5 w-5 text-purple-600" />,
    },
  ];

  const schools = [
    // Basic Education
    {
      id: 1,
      category: "basic",
      name: "École Publique de Mbalmayo",
      nameEn: "Mbalmayo Public School",
      description:
        currentLang === "en"
          ? "Primary school offering quality education for children aged 6-12."
          : "École primaire offrant une éducation de qualité pour les enfants de 6 à 12 ans.",
      type: currentLang === "en" ? "Public" : "Publique",
      system: currentLang === "en" ? "Francophone" : "Francophone",
      contact: {
        email: "ecole.publique@mbalmayo.cm",
        phone: "+237 677 123 456",
        Printer: "+237 222 987 654",
        location: currentLang === "en" ? "Central Mbalmayo" : "Mbalmayo Centre",
      },
    },
    {
      id: 2,
      category: "basic",
      name: "École Primaire Saint-Joseph",
      nameEn: "Saint Joseph Primary School",
      description:
        currentLang === "en"
          ? "Private Catholic school providing primary education with a focus on moral values."
          : "École catholique privée offrant une éducation primaire axée sur les valeurs morales.",
      type: currentLang === "en" ? "Private" : "Privée",
      system: currentLang === "en" ? "Francophone" : "Francophone",
      contact: {
        email: "stjoseph@mbalmayo.cm",
        phone: "+237 679 456 789",
        Printer: "+237 222 654 321",
        location: currentLang === "en" ? "Mbalmayo North" : "Mbalmayo Nord",
      },
    },
    {
      id: 3,
      category: "basic",
      name: "Mbalmayo Bilingual Primary School",
      nameEn: "Mbalmayo Bilingual Primary School",
      description:
        currentLang === "en"
          ? "Bilingual primary school fostering English and French language skills."
          : "École primaire bilingue favorisant les compétences en anglais et en français.",
      type: currentLang === "en" ? "Public" : "Publique",
      system: currentLang === "en" ? "Bilingual" : "Bilingue",
      contact: {
        email: "bilingual.primary@mbalmayo.cm",
        phone: "+237 675 321 987",
        Printer: "+237 222 789 123",
        location: currentLang === "en" ? "Mbalmayo East" : "Mbalmayo Est",
      },
    },
    {
      id: 4,
      category: "basic",
      name: "École Les Petits Génies",
      nameEn: "Little Geniuses School",
      description:
        currentLang === "en"
          ? "Private primary school emphasizing innovative teaching methods."
          : "École primaire privée mettant l'accent sur des méthodes d'enseignement innovantes.",
      type: currentLang === "en" ? "Private" : "Privée",
      system: currentLang === "en" ? "Anglophone" : "Anglophone",
      contact: {
        email: "petitsgenies@mbalmayo.cm",
        phone: "+237 678 654 321",
        Printer: "+237 222 456 789",
        location: currentLang === "en" ? "Mbalmayo South" : "Mbalmayo Sud",
      },
    },
    // Secondary Education
    {
      id: 5,
      category: "secondary",
      name: "Lycée de Mbalmayo",
      nameEn: "Mbalmayo High School",
      description:
        currentLang === "en"
          ? "Public secondary school offering general education for students aged 12-18."
          : "Lycée public offrant une éducation générale pour les élèves de 12 à 18 ans.",
      type: currentLang === "en" ? "Public" : "Publique",
      system: currentLang === "en" ? "Francophone" : "Francophone",
      contact: {
        email: "lycee.mbalmayo@mbalmayo.cm",
        phone: "+237 676 987 654",
        Printer: "+237 222 321 987",
        location: currentLang === "en" ? "Central Mbalmayo" : "Mbalmayo Centre",
      },
    },
    {
      id: 6,
      category: "secondary",
      name: "Collège Protestant de Mbalmayo",
      nameEn: "Mbalmayo Protestant College",
      description:
        currentLang === "en"
          ? "Private secondary school with a focus on science and humanities."
          : "Collège privé axé sur les sciences et les humanités.",
      type: currentLang === "en" ? "Private" : "Privée",
      system: currentLang === "en" ? "Francophone" : "Francophone",
      contact: {
        email: "protestant.college@mbalmayo.cm",
        phone: "+237 674 123 456",
        Printer: "+237 222 789 456",
        location: currentLang === "en" ? "Mbalmayo West" : "Mbalmayo Ouest",
      },
    },
    {
      id: 7,
      category: "secondary",
      name: "Mbalmayo Technical High School",
      nameEn: "Mbalmayo Technical High School",
      description:
        currentLang === "en"
          ? "Public technical school offering training in electronics and mechanics."
          : "Lycée technique public proposant des formations en électronique et mécanique.",
      type: currentLang === "en" ? "Public" : "Publique",
      system: currentLang === "en" ? "Bilingual" : "Bilingue",
      contact: {
        email: "technical.hs@mbalmayo.cm",
        phone: "+237 672 456 789",
        Printer: "+237 222 654 123",
        location: currentLang === "en" ? "Mbalmayo North" : "Mbalmayo Nord",
      },
    },
    // Professional Education (Vocational Schools)
    {
      id: 8,
      category: "professional",
      name: "Centre de Formation Professionnelle de Mbalmayo",
      nameEn: "Mbalmayo Vocational Training Center",
      description:
        currentLang === "en"
          ? "Vocational school offering training in automotive repair and welding."
          : "École professionnelle proposant des formations en réparation automobile et soudure.",
      type: currentLang === "en" ? "Public" : "Publique",
      system: currentLang === "en" ? "Francophone" : "Francophone",
      contact: {
        email: "vocational.center@mbalmayo.cm",
        phone: "+237 679 789 123",
        Printer: "+237 222 123 456",
        location: currentLang === "en" ? "Mbalmayo East" : "Mbalmayo Est",
      },
    },
    {
      id: 9,
      category: "professional",
      name: "École d'Hôtellerie et de Tourisme",
      nameEn: "Hospitality and Tourism School",
      description:
        currentLang === "en"
          ? "Vocational school specializing in culinary arts and hotel management."
          : "École professionnelle spécialisée en arts culinaires et gestion hôtelière.",
      type: currentLang === "en" ? "Private" : "Privée",
      system: currentLang === "en" ? "Bilingual" : "Bilingue",
      contact: {
        email: "hospitality.school@mbalmayo.cm",
        phone: "+237 675 987 654",
        Printer: "+237 222 456 789",
        location: currentLang === "en" ? "Mbalmayo South" : "Mbalmayo Sud",
      },
    },
    {
      id: 10,
      category: "professional",
      name: "Institut de Formation Technique",
      nameEn: "Technical Training Institute",
      description:
        currentLang === "en"
          ? "Vocational school offering courses in carpentry, tailoring, and masonry."
          : "Institut proposant des formations en menuiserie, couture et maçonnerie.",
      type: currentLang === "en" ? "Private" : "Privée",
      system: currentLang === "en" ? "Francophone" : "Francophone",
      contact: {
        email: "technical.institute@mbalmayo.cm",
        phone: "+237 673 321 987",
        Printer: "+237 222 789 123",
        location: currentLang === "en" ? "Mbalmayo West" : "Mbalmayo Ouest",
      },
    },
    // Higher Education
    {
      id: 11,
      category: "higher",
      name: "Université de Mbalmayo",
      nameEn: "University of Mbalmayo",
      description:
        currentLang === "en"
          ? "Public university offering degrees in business, engineering, and social sciences."
          : "Université publique proposant des diplômes en commerce, ingénierie et sciences sociales.",
      type: currentLang === "en" ? "Public" : "Publique",
      system: currentLang === "en" ? "Bilingual" : "Bilingue",
      contact: {
        email: "university@mbalmayo.cm",
        phone: "+237 677 654 321",
        Printer: "+237 222 987 654",
        location: currentLang === "en" ? "Mbalmayo Central" : "Mbalmayo Centre",
      },
    },
    {
      id: 12,
      category: "higher",
      name: "Institut Supérieur de Technologie",
      nameEn: "Higher Institute of Technology",
      description:
        currentLang === "en"
          ? "Private institute offering advanced degrees in IT and engineering."
          : "Institut privé proposant des diplômes avancés en informatique et ingénierie.",
      type: currentLang === "en" ? "Private" : "Privée",
      system: currentLang === "en" ? "Anglophone" : "Anglophone",
      contact: {
        email: "tech.institute@mbalmayo.cm",
        phone: "+237 674 789 123",
        Printer: "+237 222 321 456",
        location: currentLang === "en" ? "Mbalmayo North" : "Mbalmayo Nord",
      },
    },
  ];

  return (
    <div className="py-12 md:py-16 bg-neutral-50">
      <div className="container-custom">
        <h1 className="mb-8 text-4xl font-bold text-neutral-900 md:text-5xl">
          {currentLang === "en"
            ? "Educational Institutions in Mbalmayo"
            : "Établissements Scolaires à Mbalmayo"}
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

        {/* Schools Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {schools
            .filter((school) => school.category === activeCategory)
            .map((school) => (
              <div
                key={school.id}
                className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="mb-3 text-2xl font-semibold text-neutral-900">
                  {currentLang === "en" ? school.nameEn : school.name}
                </h3>
                <p className="mb-4 text-neutral-600 leading-relaxed">{school.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                    {school.type}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {school.system}
                  </span>
                </div>

                <div className="space-y-3 text-sm text-neutral-600">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{school.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{school.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Printer className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{school.contact.Printer}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-primary-600" />
                    <span>{school.contact.location}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolsPage;