import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpc2h0aWd1cHRhIiwiYSI6ImNsazZscmo3aDAwNjYzZXFpa2lnYWM3c2cifQ.QzKmFt6M7FYa6Sk3gl4k7A';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-122.14136505126953, 37.417274475097656], // Set initial center coordinates
      zoom: 14,
    });

    return () => map.remove(); // Clean up map instance on unmount
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />;
};

export default Map;
