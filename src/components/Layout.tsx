import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import EmergencyAlert from './ui/EmergencyAlert';
import BackToTop from './ui/BackToTop';

const Layout: React.FC = () => {
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(true);
  const location = useLocation();

  // Example emergency message (would come from CMS/API in real implementation)
  const emergencyMessage = {
    active: true,
    message: "COVID-19 Safety Measures in effect. Masks required in all city buildings.",
    severity: "warning" // could be 'warning', 'critical', 'info'
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

export default Layout