import React from 'react';

const CarMapPage = () => {
  return (
    <div>
      <div className="car-video-container">
        <video className="car-video" autoPlay loop muted>
          <source src="/car-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="map-container">
        <img src="/map.jpg" alt="Map" />
      </div>
    </div>
  );
};

export default CarMapPage;
