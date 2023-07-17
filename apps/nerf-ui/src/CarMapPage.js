import React from 'react';
import carVideo from './r1svid.mp4';
import Map from './Map';
import img from './music.jpg';
import networkImage from './network.jpg';

const CarMapPage = () => {
  return (
    <div>

      <div className="car-video-container">
        <video className="r1svid" autoPlay loop muted>
          <source src={carVideo} type="video/mp4" />
        </video>
        
        <div className="subpanel-container">
            <div className="mph-container">
                <p className="speed">70</p>
            </div>
            <div className="status-container">
                <p className="prndl">P R N D</p>
                <p className="mph">mph</p>
                <p className="battery">82%</p>
            </div>
        </div>

        <div className='aux-container'>
            <p className='time'>12:05pm</p>
            <p className='temperature'>28 °C</p>
            <p className='user'>Drishti</p>
        </div>
      </div>

      <div className="map-container">
        <Map />
        <img src={img} alt="Static Image" className="static-image" />
      </div>
    </div>
  );
};

export default CarMapPage;
