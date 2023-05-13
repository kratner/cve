import React from "react";
import GlobeComponent from "./components/Globe";

const data = [
  { lat: 40.7117244, lng: -74.0707383, label: "New York" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: -33.865143, lng: 151.2099, label: "Sydney" },
];

const globeImageURLs = [
  "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
  "//unpkg.com/three-globe/example/img/earth-night.jpg",
];

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <GlobeComponent data={data} globeImageUrl={globeImageURLs[1]} />
    </div>
  );
}

export default App;
