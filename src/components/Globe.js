import React from "react";
import Globe from "react-globe.gl";

const GlobeComponent = ({ data }) => {
  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      pointsData={data}
      pointAltitude={0.1}
      pointColor={() => "red"}
      pointLabel="label"
    />
  );
};

export default GlobeComponent;
