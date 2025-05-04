import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import GoogleMapComponent from "../components/map/GoogleMapComponent";

const ContactPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">
          {t("navigation.contact")}
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-6 shadow-md md:p-8">
            {/* ... existing form code ... */}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            {/* ... existing contact info code ... */}
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-lg bg-white shadow-md">
          <div className="h-[400px] w-full relative">
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;