import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './layout/Header';
import Footer from './layout/Footer';
import EmergencyAlert from './ui/EmergencyAlert';
import BackToTop from './ui/BackToTop';

const Layout: React.FC = () => {
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(true);
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Bilingual emergency message
  const emergencyMessage = {
    active: true,
    message: currentLang === 'en'
      ? "COVID-19 Safety Measures in effect. Masks required in all city buildings."
      : "Mesures de sécurité COVID-19 en vigueur. Masques obligatoires dans tous les bâtiments municipaux.",
    severity: "warning"
  };
  
  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      {emergencyMessage.active && showEmergencyAlert && (
        <EmergencyAlert 
          message={emergencyMessage.message} 
          severity={emergencyMessage.severity}
          onClose={() => setShowEmergencyAlert(false)}
        />
      )}
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;