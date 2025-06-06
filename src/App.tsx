import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "./components/common/Loader";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MayorPage from "./pages/MayorPage";
import CouncilMembers from "./pages/CouncilMembers";
import ServicesPage from "./pages/ServicesPage";
import NewsPage from "./pages/NewsPage";
import SingleNewsPage from "./pages/SingleNewsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import EventsPage from "./pages/EventsPage";
import SingleEventPage from "./pages/SingleEventPage";
import SportsPage from "./pages/SportsPage";
import MediaPage from "./pages/MediaPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import BirthMarriage from "./pages/services/BirthMarriage";
import BusinessLicenses from "./pages/services/BusinessLicenses";
import BuildingPermits from "./pages/services/BuildingPermits";
import WasteCollection from "./pages/services/WasteCollection";
import HallRental from "./pages/services/HallRental";
import Publicity from "./pages/services/Publicity";
import KioskRental from "./pages/services/KioskRental";
import SchoolsPage from "./pages/facilities/SchoolsPage";
import MarketsPage from "./pages/facilities/MarketsPage";
import TransportRoadsPage from "./pages/facilities/TransportRoadsPage";
import SecurityServicesPage from "./pages/facilities/SecurityServicesPage";
import HealthCentersPage from "./pages/facilities/HealthCentersPage";
import Jobs from "./pages/opportunities/Jobs";
import Internships from "./pages/opportunities/Internships";
import Tenders from "./pages/opportunities/Tenders";
import History from "./pages/History";
import { Robin } from "@real-robin/react";
import "./i18n";

function App() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust timeout as needed

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  // Optional: Add loading state for route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulate loading for route changes
    };

    // Listen to route changes (you can use react-router's history or location)
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
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
            <Route path="about/council-members" element={<CouncilMembers />} />
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
            <Route path="services/hall-rental" element={<HallRental />} />
            <Route path="services/publicity" element={<Publicity />} />
            <Route path="services/kiosk-rental" element={<KioskRental />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="news/:id" element={<SingleNewsPage />} />
            <Route path="facilities/*" element={<FacilitiesPage />} />
            <Route path="facilities/schools" element={<SchoolsPage />} />
            <Route path="facilities/markets" element={<MarketsPage />} />
            <Route
              path="facilities/transport-roads"
              element={<TransportRoadsPage />}
            />
            <Route
              path="facilities/security-services"
              element={<SecurityServicesPage />}
            />
            <Route
              path="facilities/health-centers"
              element={<HealthCentersPage />}
            />
            <Route path="events/*" element={<EventsPage />} />
            <Route path="events/:id" element={<SingleEventPage />} />
            <Route path="sports/*" element={<SportsPage />} />
            <Route path="media/*" element={<MediaPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* Opportunities */}
            <Route path="jobs/*" element={<Jobs />} />
            <Route path="internships" element={<Internships />} />
            <Route path="tenders" element={<Tenders />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          {/* French Routes */}
          <Route path="/fr" element={<Navigate to="/fr/accueil" replace />} />
          <Route path="/fr/*" element={<Layout />}>
            <Route path="accueil" element={<HomePage />} />
            <Route path="a-propos/*" element={<AboutPage />} />
            <Route path="a-propos/mayor" element={<MayorPage />} />
            <Route path="a-propos/council-members" element={<CouncilMembers />} />
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
            <Route path="services/hall-rental" element={<HallRental />} />
            <Route path="services/publicity" element={<Publicity />} />
            <Route path="services/kiosk-rental" element={<KioskRental />} />
            <Route path="actualites" element={<NewsPage />} />
            <Route path="actualites/:id" element={<SingleNewsPage />} />
            <Route path="installations/*" element={<FacilitiesPage />} />
            <Route path="installations/ecoles" element={<SchoolsPage />} />
            <Route path="installations/marches" element={<MarketsPage />} />
            <Route
              path="installations/transport-routes"
              element={<TransportRoadsPage />}
            />
            <Route
              path="installations/services-securite"
              element={<SecurityServicesPage />}
            />
            <Route
              path="installations/centres-sante"
              element={<HealthCentersPage />}
            />
            <Route path="evenements/*" element={<EventsPage />} />
            <Route path="evenements/:id" element={<SingleEventPage />} />
            <Route path="sports/*" element={<SportsPage />} />
            <Route path="mediatheque/*" element={<MediaPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* Opportunities */}
            <Route path="emplois/*" element={<Jobs />} />
            <Route path="stages" element={<Internships />} />
            <Route path="appels-d-offres" element={<Tenders />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/en/home" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;