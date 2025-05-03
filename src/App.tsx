import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loader from "./components/common/Loader";

import { useTranslation } from "react-i18next";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MayorPage from "./pages/MayorPage";
import ServicesPage from "./pages/ServicesPage";
import NewsPage from "./pages/NewsPage";
import SingleNewsPage from "./pages/SingleNewsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import EventsPage from "./pages/EventsPage";
import SportsPage from "./pages/SportsPage";
import MediaPage from "./pages/MediaPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

import BirthMarriage from "./pages/services/BirthMarriage";
import BusinessLicenses from "./pages/services/BusinessLicenses";
import BuildingPermits from "./pages/services/BuildingPermits";
import WasteCollection from "./pages/services/WasteCollection";

import History from "./pages/History";

import "./i18n";

//adding real robin.dev
import { Robin } from "@real-robin/react";
import { useEffect, useState } from "react";

function App() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking if all resources are loaded
    window.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulate a 1 second loading time
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* Adding the Robin widget, to display it on my screen*/}
      <div className="fixed bottom-10 right-4 z-[1000]">
        <Robin apiKey="rr_ToC3poU6si3M6aBErjDzqqyJvE_uau1b" />
      </div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${currentLang}/home`} replace />}
          />

          {/* English Routes */}
          <Route path="/en" element={<Navigate to="/en/home" replace />} />
          <Route path="/en/*" element={<Layout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="about/*" element={<AboutPage />} />
            <Route path="about/mayor" element={<MayorPage />} />
            <Route path="about/history" element={<History />} />
            <Route path="services/*" element={<ServicesPage />} />
            <Route path="services/birth-marriage" element={<BirthMarriage />} />
            <Route
              path="services/business-licenses"
              element={<BusinessLicenses />}
            />
            <Route
              path="services/building-permits"
              element={<BuildingPermits />}
            />
            <Route
              path="services/waste-collection"
              element={<WasteCollection />}
            />
            <Route path="news" element={<NewsPage />} />
            <Route path="news/:id" element={<SingleNewsPage />} />
            <Route path="facilities/*" element={<FacilitiesPage />} />
            <Route path="events/*" element={<EventsPage />} />
            <Route path="sports/*" element={<SportsPage />} />
            <Route path="media/*" element={<MediaPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* French Routes */}
          <Route path="/fr" element={<Navigate to="/fr/accueil" replace />} />
          <Route path="/fr/*" element={<Layout />}>
            <Route path="accueil" element={<HomePage />} />
            <Route path="a-propos/*" element={<AboutPage />} />
            <Route path="a-propos/mayor" element={<MayorPage />} />
            <Route path="a-propos/history" element={<History />} />
            <Route path="services/*" element={<ServicesPage />} />
            <Route path="services/birth-marriage" element={<BirthMarriage />} />
            <Route
              path="services/business-licenses"
              element={<BusinessLicenses />}
            />
            <Route
              path="services/building-permits"
              element={<BuildingPermits />}
            />
            <Route
              path="services/waste-collection"
              element={<WasteCollection />}
            />
            <Route path="actualites" element={<NewsPage />} />
            <Route path="actualites/:id" element={<SingleNewsPage />} />
            <Route path="installations/*" element={<FacilitiesPage />} />
            <Route path="evenements/*" element={<EventsPage />} />
            <Route path="sports/*" element={<SportsPage />} />
            <Route path="mediatheque/*" element={<MediaPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Redirect any other language combinations to English */}
          <Route path="*" element={<Navigate to="/en/home" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
