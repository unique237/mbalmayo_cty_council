import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Briefcase, Building2, Map, Image } from "lucide-react";
import { Link } from "react-router-dom";

const DiscoverMbyo = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const cards = [
    {
      icon: Briefcase,
      title: currentLang === "en" ? "Job Opportunities" : "Offres d'emploi",
      description:
        currentLang === "en"
          ? "Explore available jobs and internships in Mbalmayo City Council and partner organizations."
          : "Découvrez les emplois et stages disponibles à la Mairie de Mbalmayo et dans les organisations partenaires.",
      link: currentLang === "en" ? "/en/jobs" : "/fr/emplois",
      color: "text-blue-600",
    },
    {
      icon: Building2,
      title: currentLang === "en" ? "Procurements" : "Marchés publics",
      description:
        currentLang === "en"
          ? "Access information about current tenders, contracts, and procurement opportunities."
          : "Accédez aux informations sur les appels d'offres, contrats et opportunités de marchés publics.",
      link: currentLang === "en" ? "/en/procurements" : "/fr/marches-publics",
      color: "text-green-600",
    },
    {
      icon: Map,
      title: currentLang === "en" ? "Relocation Procedures" : "Procédures de déménagement",
      description:
        currentLang === "en"
          ? "Learn about the steps and requirements for relocating to Mbalmayo."
          : "Informez-vous sur les étapes et exigences pour s'installer à Mbalmayo.",
      link: currentLang === "en" ? "/en/relocation" : "/fr/demenagement",
      color: "text-orange-600",
    },
    {
      icon: Image,
      title: currentLang === "en" ? "Gallery" : "Galerie",
      description:
        currentLang === "en"
          ? "Discover Mbalmayo through our collection of photos and videos showcasing city life."
          : "Découvrez Mbalmayo à travers notre collection de photos et vidéos illustrant la vie citadine.",
      link: currentLang === "en" ? "/en/gallery" : "/fr/galerie",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side - YouTube Video */}
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/PHUNjdUY8zI?start=48&autoplay=1&mute=1"
              title="Discover Mbalmayo"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {currentLang === "en"
                ? "Discover the Beauty of Mbalmayo"
                : "Découvrez la Beauté de Mbalmayo"}
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-neutral-700">
              {currentLang === "en"
                ? "Experience Mbalmayo from above through this stunning aerial tour. Nestled in the heart of Cameroon, our city combines natural beauty with urban development, featuring lush landscapes, vibrant markets, and modern infrastructure."
                : "Découvrez Mbalmayo vue du ciel à travers cette magnifique visite aérienne. Nichée au cœur du Cameroun, notre ville allie beauté naturelle et développement urbain, avec ses paysages luxuriants, ses marchés animés et ses infrastructures modernes."}
            </p>

            {/*<p className="mb-8 text-lg leading-relaxed text-neutral-700">
              {currentLang === "en"
                ? "From the meandering Nyong River to our bustling city center, this aerial perspective showcases the harmonious blend of nature and urban life that makes Mbalmayo unique."
                : "Du fleuve Nyong serpentant à notre centre-ville animé, cette perspective aérienne met en valeur le mélange harmonieux de nature et de vie urbaine qui rend Mbalmayo unique."}
            </p>*/}

            <Link
              to={currentLang === "en" ? "/en/about/history" : "/fr/a-propos/history"}
              className="group mb-8 inline-flex items-center text-lg font-medium text-primary-600 transition-colors hover:text-primary-700"
            >
              {currentLang === "en"
                ? "Learn more about our city"
                : "En savoir plus sur notre ville"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-50 p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <card.icon className={`h-6 w-6 ${card.color}`} />
                  <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{card.description}</p>
                  <Link
                    to={card.link}
                    className="group mt-3 inline-flex items-center text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
                  >
                    {currentLang === "en" ? "View more" : "Voir plus"}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMbyo;
