import React from 'react';
import ReactPlayer from 'react-player';

function CarScreen() {
  return (
    <div>
      <ReactPlayer url="path/to/your/video" playing loop muted width="100%" />
    </div>
  );
}

export default CarScreen;