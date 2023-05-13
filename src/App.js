import React from "react";
import GlobeComponent from "./components/Globe";

const data = [
  { lat: 40.7117244, lng: -74.0707383, label: "New York" },
  { lat: 51.5074, lng: -0.1278, label: "London" },
  { lat: -33.865143, lng: 151.2099, label: "Sydney" },
];

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <GlobeComponent data={data} />
    </div>
  );
}

export default App;
