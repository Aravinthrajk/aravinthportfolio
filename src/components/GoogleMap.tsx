import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markers?: Array<{
    position: {
      lat: number;
      lng: number;
    };
    title: string;
  }>;
}

const MapComponent: React.FC<MapProps> = ({ center, zoom = 12, markers = [] }) => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={zoom}
        center={center}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;