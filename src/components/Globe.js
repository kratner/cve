import Globe from "react-globe.gl";
import * as THREE from "three";
import { scaleLinear } from "d3-scale";

/*
   "cve": "CVE-2023-32784",
      "epss": "0.000430000",
      "percentile": "0.070580000",
      "date": "2023-05-15"

*/

const PointLabelRenderer = () => {
  return (
    <div>
      <strong>CVE:</strong>
    </div>
  );
};

const GlobeComponent = ({ data, globeImageUrl, width, height, position }) => {
  const calculateSphereRadius = (percentile) => {
    // Define the scaling factor for sphere radius based on percentile
    const scaleFactor = 10;
    // Calculate the radius based on the percentile value
    return Math.sqrt(percentile) * scaleFactor;
  };
  // Define the color scale for mapping percentile to color
  const colorScale = scaleLinear()
    .domain([0, 1]) // Assuming percentile ranges from 0 to 1
    .range(["blue", "red"]);

  return (
    <Globe
      globeImageUrl={globeImageUrl}
      pointsData={data}
      pointAltitude={0.1} // Adjust the pointAltitude value to lift the spheres above the globe
      pointColor={(d) => colorScale(d.percentile)} // Use the color scale to set the point color
      pointRadius={(point) => calculateSphereRadius(point.percentile)}
      // PointLabelRenderer={({ point }) => <PointLabelRenderer point={point} />} // Pass the point object as a prop
      //   <PointLabelRenderer point={point} index={index} />
      // )}
      pointLabel={(d) =>
        "<div><strong>CVE:</strong> " +
        d.cve +
        "<br /><strong>EPSS:</strong> " +
        d.epss +
        "<br /><strong>%:</strong> " +
        d.percentile +
        "</div>"
      }
      pointLat="lat"
      pointLng="lng"
      pointResolution={24} // Increase the point resolution for smoother spheres
      pointMaterial={({ percentile }) => {
        const color = new THREE.Color().setHSL(percentile, 1, 0.5);
        return new THREE.MeshLambertMaterial({ color });
      }}
      width={width}
      height={height}
      position={position}
    />
  );
};

export default GlobeComponent;
