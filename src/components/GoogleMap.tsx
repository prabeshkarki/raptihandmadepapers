
import React, { useEffect, useRef } from 'react';

interface GoogleMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ latitude, longitude, zoom = 14 }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Create the iframe with the Google Maps embed
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=${zoom}`;

    // Clear the map container and append the iframe
    if (mapRef.current.firstChild) {
      mapRef.current.removeChild(mapRef.current.firstChild);
    }
    mapRef.current.appendChild(iframe);

    return () => {
      if (mapRef.current?.firstChild) {
        mapRef.current.removeChild(mapRef.current.firstChild);
      }
    };
  }, [latitude, longitude, zoom]);

  return (
    <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden shadow-md"></div>
  );
};

export default GoogleMap;
