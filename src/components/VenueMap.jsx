import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 6.334986,
  lng: 5.603746
};

const VenueMap = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Venue: Benin City, Edo State</h3>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

export default VenueMap;