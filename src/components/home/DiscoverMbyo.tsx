import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DiscoverMbyo = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

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
              to={
                currentLang === "en"
                  ? "/en/about/history"
                  : "/fr/a-propos/history"
              }
              className="group mb-8 inline-flex items-center text-lg font-medium text-primary-600 transition-colors hover:text-primary-700"
            >
              {currentLang === "en"
                ? "Learn more about our city"
                : "En savoir plus sur notre ville"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMbyo;
