import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";

const GoogleMapComponent: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Updated coordinates for Mbalmayo City Hall
  const mapCenter = {
    lat: 3.5172522159437563,
    lng: 11.501632403541368
  };

  // Map container styling
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  // Updated map options with slightly adjusted zoom
  const mapOptions = {
    zoom: 16, // Increased zoom level for better visibility
    center: mapCenter,
  };

  // Marker label
  const markerLabel = {
    text: currentLang === "en" ? "Mbalmayo Town Hall" : "Hôtel de Ville de Mbalmayo",
    fontFamily: "Arial",
    fontSize: "14px",
    color: "#000000",
    fontWeight: "bold",
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={mapOptions.zoom}
        options={{
          mapTypeControl: true, // Enabled map type control for better user experience
          streetViewControl: true, // Enabled street view for better exploration
          fullscreenControl: true,
          zoomControl: true,
        }}
      >
        <Marker
          position={mapCenter}
          label={markerLabel}
          title={currentLang === "en" ? "Mbalmayo Town Hall" : "Hôtel de Ville de Mbalmayo"}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;