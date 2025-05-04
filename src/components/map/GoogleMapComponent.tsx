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
    height: "400px", // Fixed height instead of 100%
    minHeight: "400px", // Ensure minimum height
  };

  // Updated map options with slightly adjusted zoom
  const mapOptions = {
    zoom: 16,
    center: mapCenter,
    gestureHandling: "cooperative", // Improved mobile handling
    scrollwheel: false, // Prevent accidental zooming
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
    <div className="map-container relative w-full h-full">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  loadingElement={<div className="h-full w-full flex items-center justify-center">Loading map...</div>}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={mapOptions.zoom}
          options={{
            ...mapOptions,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
            zoomControl: true,
            mapTypeControlOptions: {
              position: google.maps.ControlPosition.TOP_RIGHT,
            },
            zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_CENTER,
            },
          }}
        >
          <Marker
            position={mapCenter}
            label={markerLabel}
            title={currentLang === "en" ? "Mbalmayo Town Hall" : "Hôtel de Ville de Mbalmayo"}
          />
        </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;