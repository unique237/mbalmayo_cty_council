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
            <h2 className="mb-6 text-2xl font-semibold text-neutral-900">
              {currentLang === "en" ? "Get in Touch" : "Contactez-Nous"}
            </h2>
            <form>
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1 block text-sm font-medium text-neutral-700"
                  >
                    {currentLang === "en" ? "First Name" : "Prénom"}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1 block text-sm font-medium text-neutral-700"
                  >
                    {currentLang === "en" ? "Last Name" : "Nom"}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-neutral-700"
                >
                  {currentLang === "en" ? "Email" : "Courriel"}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-neutral-700"
                >
                  {currentLang === "en" ? "Subject" : "Sujet"}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-neutral-700"
                >
                  {currentLang === "en" ? "Message" : "Message"}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-neutral-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                {currentLang === "en" ? "Send Message" : "Envoyer le Message"}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
                {currentLang === "en"
                  ? "Contact Information"
                  : "Informations de Contact"}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <h3 className="font-medium text-neutral-900">
                      {currentLang === "en" ? "Address" : "Adresse"}
                    </h3>
                    <p className="text-neutral-600">
                      Hôtel de ville, Avenue principale
                      <br />
                      Mbalmayo, Cameroun
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <h3 className="font-medium text-neutral-900">
                      {currentLang === "en" ? "Phone" : "Téléphone"}
                    </h3>
                    <p className="text-neutral-600">+237 222 28 46 20</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                  <div>
                    <h3 className="font-medium text-neutral-900">
                      {currentLang === "en" ? "Email" : "Courriel"}
                    </h3>
                    <p className="text-neutral-600">contact@mbalmayo.cm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
                {currentLang === "en" ? "Office Hours" : "Heures d'Ouverture"}
              </h2>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex justify-between">
                  <span>
                    {currentLang === "en"
                      ? "Monday - Friday"
                      : "Lundi - Vendredi"}
                  </span>
                  <span>8:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{currentLang === "en" ? "Saturday" : "Samedi"}</span>
                  <span>9:00 - 12:00</span>
                </li>
                <li className="flex justify-between">
                  <span>
                    {currentLang === "en"
                      ? "Sunday & Holidays"
                      : "Dimanche & Jours Fériés"}
                  </span>
                  <span>{currentLang === "en" ? "Closed" : "Fermé"}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-primary-50 p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-neutral-900">
                {currentLang === "en"
                  ? "Emergency Contact"
                  : "Contact d'Urgence"}
              </h2>
              <p className="mb-4 text-neutral-700">
                {currentLang === "en"
                  ? "For emergencies outside regular office hours:"
                  : "Pour les urgences en dehors des heures de bureau:"}
              </p>
              <div className="rounded-md bg-accent-100 p-4 text-accent-800">
                <p className="font-medium">+237 222 28 46 21</p>
              </div>
            </div>
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
