import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import NewsSearch from "../components/news/NewsSearch";

const NewsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") {
      return path;
    }

    // Map English routes to French routes
    const routeMap: { [key: string]: string } = {
      news: "actualites",
      "news/1": "actualites/1",
      "news/2": "actualites/2",
      "news/3": "actualites/3",
    };

    return routeMap[path] || path;
  };

  // Sample news data - in a real app, this would come from an API
  const newsItems = [
    {
      id: "1",
      title:
        currentLang === "en"
          ? "City Hall Renovation Project Announced"
          : "Annonce du projet de rénovation de l'Hôtel de Ville",
      excerpt:
        currentLang === "en"
          ? "The Mayor has announced a major renovation project for the City Hall building, with construction scheduled to begin next month."
          : "Le Maire a annoncé un important projet de rénovation du bâtiment de l'Hôtel de Ville, les travaux devant commencer le mois prochain.",
      content:
        currentLang === "en"
          ? "The renovation project aims to modernize facilities while preserving the building's historic character..."
          : "Le projet de rénovation vise à moderniser les installations tout en préservant le caractère historique du bâtiment...",
      date: "2025-04-15",
      image:
        "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746046869/hotel-de-ville_mg3z2j.jpg",
      category: currentLang === "en" ? "Announcements" : "Annonces",
      author: "Communications Department",
    },
    {
      id: "2",
      title:
        currentLang === "en"
          ? "New Waste Collection Schedule"
          : "Nouveau calendrier de collecte des déchets",
      excerpt:
        currentLang === "en"
          ? "Starting next week, the city will implement a new waste collection schedule. Please check the updated timetable for your area."
          : "À partir de la semaine prochaine, la ville mettra en place un nouveau calendrier de collecte des déchets. Veuillez consulter le calendrier mis à jour pour votre zone.",
      content:
        currentLang === "en"
          ? "The new schedule optimizes collection routes and introduces separate collection days for different types of waste..."
          : "Le nouveau calendrier optimise les itinéraires de collecte et introduit des jours de collecte distincts pour différents types de déchets...",
      date: "2025-04-10",
      image:
        "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746083956/hysacam_vlkpsy.avif",
      category: currentLang === "en" ? "Public Notices" : "Avis Publics",
      author: "Waste Management Department",
    },
    {
      id: "3",
      title:
        currentLang === "en"
          ? "Community Market to Open This Weekend"
          : "Ouverture du marché communautaire ce week-end",
      excerpt:
        currentLang === "en"
          ? "The new community market will open this weekend featuring local produce, crafts, and entertainment for the whole family."
          : "Le nouveau marché communautaire ouvrira ses portes ce week-end avec des produits locaux, de l'artisanat et des divertissements pour toute la famille.",
      content:
        currentLang === "en"
          ? "The market will feature over 50 local vendors, live music, and activities for children..."
          : "Le marché accueillera plus de 50 vendeurs locaux, de la musique live et des activités pour les enfants...",
      date: "2025-04-05",
      image:
        "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746045724/mbalmayo_hkpcij.jpg",
      category: currentLang === "en" ? "Events" : "Événements",
      author: "Events Department",
    },
  ];

  const handleNewsClick = (newsId: string) => {
    navigate(`/${currentLang}/${getLocalizedPath(`news/${newsId}`)}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (currentLang === "en") {
      return format(date, "MMMM d, yyyy");
    } else {
      return format(date, "d MMMM yyyy", { locale: fr });
    }
  };

  const filteredNews = useMemo(() => {
    if (!searchQuery) return newsItems;

    const query = searchQuery.toLowerCase();
    return newsItems.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [newsItems, searchQuery]);

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            {t("navigation.news")}
          </h1>
          <NewsSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {filteredNews.length === 0 ? (
          <div className="rounded-lg bg-neutral-100 p-8 text-center">
            <p className="text-lg text-neutral-600">
              {currentLang === "en"
                ? "No news articles found matching your search."
                : "Aucun article trouvé correspondant à votre recherche."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                onClick={() => handleNewsClick(item.id)}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                      <Tag className="mr-1 h-3 w-3" />
                      {item.category}
                    </span>
                    <time className="flex items-center text-xs text-neutral-500">
                      <Calendar className="mr-1 h-3 w-3" />
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <h2 className="mb-2 line-clamp-2 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-primary-700">
                    {item.title}
                  </h2>
                  <p className="mb-4 line-clamp-3 text-sm text-neutral-600">
                    {item.excerpt}
                  </p>
                  <div className="inline-flex items-center text-sm font-medium text-primary-700 transition-colors group-hover:text-primary-800">
                    {t("common.readMore")}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;