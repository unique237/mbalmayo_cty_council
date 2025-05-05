import React, { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Calendar, ArrowRight, Tag, Filter, X } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import NewsSearch from "../components/news/NewsSearch";

const NewsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  //const [searchQuery, setSearchQuery] = useState(initialSearch) handleSearch
  const navigate = useNavigate();

  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") {
      return path;
    }

    const routeMap: { [key: string]: string } = {
      news: "actualites",
      "news/1": "actualites/1",
      "news/2": "actualites/2",
      "news/3": "actualites/3",
      "news/4": "actualites/4",
      "news/5": "actualites/5",
    };

    return routeMap[path] || path;
  };
  // Handle search query change
  const handleSearchChange= (value: string) => {
    setSearchQuery(value);
    setSearchParams(value ? {search: value} : {});
  }

  //useEffect
  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam !== searchQuery) {
      setSearchQuery(searchParam || "");
    }
  }, [searchParams]);


  // Sample news data with categories
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
    {
      id: "4",
      title:
        currentLang === "en"
          ? "Local Football Tournament Scheduled"
          : "Tournoi de football local programmé",
      excerpt:
        currentLang === "en"
          ? "A local football tournament will take place next month, bringing together teams from across Mbalmayo."
          : "Un tournoi de football local aura lieu le mois prochain, réunissant des équipes de tout Mbalmayo.",
      content:
        currentLang === "en"
          ? "The tournament will feature youth and adult categories, with prizes for the winners..."
          : "Le tournoi comprendra des catégories pour jeunes et adultes, avec des prix pour les gagnants...",
      date: "2025-04-20",
      image:
        "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746351445/Mbalmayo/egzged4ps8peruxwdyqh.jpg",
      category: currentLang === "en" ? "Sports" : "Sports",
      author: "Sports Department",
    },
    {
      id: "5",
      title:
        currentLang === "en"
          ? "New Economic Development Plan Unveiled"
          : "Nouveau plan de développement économique dévoilé",
      excerpt:
        currentLang === "en"
          ? "The city has unveiled a new plan to boost local businesses and attract investment."
          : "La ville a dévoilé un nouveau plan pour stimuler les entreprises locales et attirer des investissements.",
      content:
        currentLang === "en"
          ? "The plan includes tax incentives, infrastructure improvements, and support for small businesses..."
          : "Le plan comprend des incitations fiscales, des améliorations des infrastructures et un soutien aux petites entreprises...",
      date: "2025-04-01",
      image:
        "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746351447/Mbalmayo/bjwjsp9woomqfqlcrv0a.jpg",
      category: currentLang === "en" ? "Economy" : "Économie",
      author: "Economic Development Department",
    },
  ];

  // Get unique categories for filters
  const categories = [
    currentLang === "en" ? "Announcements" : "Annonces",
    currentLang === "en" ? "Events" : "Événements",
    currentLang === "en" ? "Sports" : "Sports",
    currentLang === "en" ? "Economy" : "Économie",
    currentLang === "en" ? "Public Notices" : "Avis Publics",
  ];

  // Toggle category filter
  const toggleCategory = (category: string) => {
    if (activeCategories.includes(category)) {
      setActiveCategories(activeCategories.filter((cat) => cat !== category));
    } else {
      setActiveCategories([...activeCategories, category]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveCategories([]);
    setShowFilters(false);
  };

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
    let filtered = newsItems;

    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.excerpt.toLowerCase().includes(query) ||
          item.content.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (activeCategories.length > 0) {
      filtered = filtered.filter((item) =>
        activeCategories.includes(item.category)
      );
    }

    return filtered;
  }, [newsItems, searchQuery, activeCategories]);

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            {t("navigation.news")}
          </h1>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex-1">
              <NewsSearch
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />
            </div>
            <div className="w-full md:w-48">
              <button
                className="flex w-full items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4" />
                {currentLang === "en" ? "Filter by Category" : "Filtrer par Catégorie"}
                {activeCategories.length > 0 && (
                  <span className="ml-2 rounded-full bg-primary-100 px-2 py-0.5 text-xs text-primary-800">
                    {activeCategories.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Category filters */}
        {showFilters && (
          <div className="mb-8 rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-neutral-900">
                {currentLang === "en" ? "Filter by Category" : "Filtrer par Catégorie"}
              </h3>
              {activeCategories.length > 0 && (
                <button
                  className="flex items-center text-sm text-neutral-500 hover:text-neutral-700"
                  onClick={clearFilters}
                >
                  <X className="mr-1 h-4 w-4" />
                  {currentLang === "en" ? "Clear Filters" : "Effacer les Filtres"}
                </button>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                    activeCategories.includes(category)
                      ? "bg-primary-100 text-primary-800"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredNews.length === 0 ? (
          <div className="rounded-lg bg-neutral-100 p-8 text-center">
            <p className="text-lg text-neutral-600">
              {currentLang === "en"
                ? "No news articles found matching your search or category."
                : "Aucun article trouvé correspondant à votre recherche ou catégorie."}
              {activeCategories.length > 0 && (
                <button
                  className="mt-4 rounded-md bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-100"
                  onClick={clearFilters}
                >
                  {currentLang === "en" ? "Clear all filters" : "Effacer tous les filtres"}
                </button>
              )}
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