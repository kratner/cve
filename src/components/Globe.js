import React from "react";
import Globe from "react-globe.gl";

const GlobeComponent = ({ data, globeImageUrl }) => {
  return (
    <Globe
      globeImageUrl={globeImageUrl}
      pointsData={data}
      pointAltitude={0.1}
      pointColor={() => "red"}
      pointLabel="label"
    />
  );
};

export default GlobeComponent;
