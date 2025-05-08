import React from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Users, Trees as Tree, Sun, Briefcase, ClipboardCheck     } from "lucide-react";
import { Link } from "react-router-dom";

const MbalmayoShowcase: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      title:
        currentLang === "en" ? "Strategic Location" : "Emplacement Stratégique",
      description:
        currentLang === "en"
          ? "Located 50km from Yaoundé, connecting the South and Center regions"
          : "Situé à 50km de Yaoundé, reliant les régions du Sud et du Centre",
      link:
        currentLang === "en"
          ? "/en/about/location"
          : "/fr/a-propos/emplacement",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: currentLang === "en" ? "Rich Culture" : "Culture Riche",
      description:
        currentLang === "en"
          ? "Home to diverse ethnic groups with vibrant cultural heritage"
          : "Abrite des groupes ethniques divers avec un riche patrimoine culturel",
      link: currentLang === "en" ? "/en/about/culture" : "/fr/a-propos/culture",
    },
    {
      icon: <Tree className="h-8 w-8 text-green-600" />,
      title: currentLang === "en" ? "Natural Beauty" : "Beauté Naturelle",
      description:
        currentLang === "en"
          ? "Surrounded by lush forests and the scenic Nyong River"
          : "Entouré de forêts luxuriantes et du pittoresque fleuve Nyong",
      link: currentLang === "en" ? "/en/about/nature" : "/fr/a-propos/nature",
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: currentLang === "en" ? "Economic Hub" : "Pôle Économique",
      description:
        currentLang === "en"
          ? "Growing economic center with agriculture and commerce"
          : "Centre économique en croissance avec agriculture et commerce",
      link:
        currentLang === "en" ? "/en/about/economy" : "/fr/a-propos/economie",
    },
    //jobs and internships
    {
      icon: <Briefcase className="h-8 w-8 text-purple-600" />,
      title:
        currentLang === "en" ? "Job Opportunities" : "Opportunités d'Emploi",
      description:
        currentLang === "en"
          ? "A city with a growing job market and internship programs"
          : "Une ville avec un marché de l'emploi en croissance et des programmes de stage",
          link:
          currentLang === "en" ? "/en/jobs" : "/fr/emplois",
    },
    //Tenders
    {
      icon: <ClipboardCheck  className="h-8 w-8 text-orange-600" />,
      title:
        currentLang === "en" ? "Tenders" : "Appels d'Offres",
      description:
        currentLang === "en"
          ? "A city with a growing market for tenders and contracts"
          : "Une ville avec un marché en croissance pour les appels d'offres et les contrats",
      link:
        currentLang === "en" ? "/en/tenders" : "/fr/appels-d-offres",
    },
    //tourism
    {
      icon: <MapPin className="h-8 w-8 text-teal-600" />,
      title:
        currentLang === "en" ? "Tourism" : "Tourisme",
      description:
        currentLang === "en"
          ? "A city with a growing tourism sector and attractions"  
          : "Une ville avec un secteur touristique en croissance et des attractions",
      link:
        currentLang === "en" ? "/en/tourism" : "/fr/tourisme",
    },
    //internships
    {
      icon: <Users className="h-8 w-8 text-pink-600" />,
      title:
        currentLang === "en" ? "Internships" : "Stages",  
      description:
        currentLang === "en"
          ? "A city with a growing internship market and programs"  
          : "Une ville avec un marché en croissance pour les stages et les programmes",
      link:
        currentLang === "en" ? "/en/internships" : "/fr/stages",
    },
  ];

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            {currentLang === "en" ? "Discover Mbalmayo" : "Découvrez Mbalmayo"}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {currentLang === "en"
              ? "A vibrant city with rich heritage and promising future"
              : "Une ville dynamique avec un riche patrimoine et un avenir prometteur"}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mb-4 text-neutral-600">{feature.description}</p>
              <Link
                to={feature.link || "#"}
                className="inline-block text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                {currentLang === "en" ? "View more ->" : "En savoir plus ->"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MbalmayoShowcase;
