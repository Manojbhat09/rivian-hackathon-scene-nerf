import React from 'react';
import carVideo from './r1svid.mp4';

const CarMapPage = () => {
  return (
    <div>
      <div className="car-video-container">
        <video className="r2svid" autoPlay loop muted>
          <source src={carVideo} type="video/mp4" />
        </video>
      </div>
      <div className="map-container">
        <img src="/map.jpg" alt="Map" />
      </div>
    </div>
  );
};

export default CarMapPage;
