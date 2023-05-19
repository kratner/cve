import React, { useState, useEffect } from "react";
import GlobeComponent from "./components/Globe";
// import DataFetcher from "./components/DataFetcher";
// import BarChart from "./components/d3/BarChart";
// import Spheres from "./components/d3/Spheres";
import HeadContent from "./components/HeadContent";
import HomePage from "./components/HomePage";
import { getRandomCoordinate } from "./utils/utils";
import "./styles/index.scss";

// const globeComponentData = [
//   { lat: 40.7117244, lng: -74.0707383, label: "New York" },
//   { lat: 51.5074, lng: -0.1278, label: "London" },
//   { lat: -33.865143, lng: 151.2099, label: "Sydney" },
// ];

const globeImageURLs = [
  "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
  "//unpkg.com/three-globe/example/img/earth-night.jpg",
];

// const CVE_API_URL_STEM = "https://services.nvd.nist.gov/rest/json/cves/2.0";

// const EPSS_API_URL_STEM = "https://api.first.org/data/v1/epss";

const App = () => {
  // const [EPSSBulletedList, setEPSSBulletedList] = useState(null);

  const [epss_data, setEPSSData] = useState(null);

  const [isEPSSDataLoaded, setEPSSIsDataLoaded] = useState(false);

  const handleEPSSDataLoaded = (data) => {
    const parsedData = data.data.map((item) => {
      const { cve, epss, percentile, date } = item;
      const { lat, lng } = getRandomCoordinate();
      return { cve, epss, percentile, date, lat, lng };
    });
    setEPSSData(parsedData);
    setEPSSIsDataLoaded(true);
  };

  useEffect(() => {
    // Fetch the data only once during initialization
    fetch(process.env.PUBLIC_URL + "/data/epss_data.json")
      .then((response) => response.json())
      .then((data) => handleEPSSDataLoaded(data));
  }, []);

  const contentBlocks = [
    isEPSSDataLoaded && (
      <GlobeComponent
        data={epss_data}
        globeImageUrl={globeImageURLs[1]}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    ),
  ];
  // const [CVEBulletedList, setCVEBulletedList] = useState(null);

  // const handleCVEDataLoaded = (data) => {
  //   const parsedData = [];

  //   // Assuming the data is an array of objects, you can iterate over it
  //   data.vulnerabilities.forEach((item, index) => {
  //     // Extract the relevant properties from each item and push them to the parsedData array
  //     const title = item.cve.id;
  //     const description = item.cve.descriptions[0].value;
  //     const baseSeverity = item.cve.metrics.cvssMetricV2
  //       ? item.cve.metrics.cvssMetricV2[0]?.baseSeverity
  //       : undefined;
  //     const type = item.cve.metrics.cvssMetricV2
  //       ? item.cve.metrics.cvssMetricV2[0]?.type
  //       : undefined;
  //     const impactScore = item.cve.metrics.cvssMetricV2
  //       ? item.cve.metrics.cvssMetricV2[0]?.impactScore
  //       : undefined;
  //     parsedData.push({
  //       title,
  //       description,
  //       baseSeverity,
  //       type,
  //       impactScore,
  //       id: index,
  //     });
  //   });

  //   // Render the bulleted list
  //   const listItems = parsedData.map((item, index) => (
  //     <li key={item.title}>
  //       <strong>{item.title}</strong>: {item.description}
  //       <br />
  //       <strong>Impact Score</strong>: {item.impactScore}
  //       <br />
  //       <strong>Base Severity</strong>: {item.baseSeverity}
  //       <br />
  //       <strong>Type</strong>: {item.type}
  //     </li>
  //   ));

  //   setCVEBulletedList(<ul key="cve-data">{listItems}</ul>);
  // };

  return (
    <div>
      <HeadContent
        title="CVE EPSS Data"
        description="CVE EPSS Data"
        keywords="cve, epss, vulnerabilities"
      />
      <HomePage
        subtitle="Exploit Prediction Scoring System (EPSS)"
        // subtitle="https://www.first.org"
        // buttonText="Contact Us"
        contentBlocks={contentBlocks}
        footerText="5/15/2023"
      />
      {/* <Spheres data={epss_data} /> */}

      {/* <h3>National Institute of Standards and Technology (NIST)</h3>
      <h4>National Vulnerabilities Database</h4>
      <h4>https://nvd.nist.gov</h4>
      <DataFetcher
        // urlStem={CVE_API_URL_STEM}
        // parameters={{ resultsPerPage: "20", startIndex: "0" }}
        // parameters={{ envelope: true, pretty: true, offset: 0 }}
        localFile={process.env.PUBLIC_URL + "/data/cve_data.json"}
        onDataLoaded={handleCVEDataLoaded}
      />
      {CVEBulletedList} */}
      {/* <Spheres data={epss_data} />
      <BarChart data={epss_data} /> */}
      {/* <h3>Exploit Prediction Scoring System (EPSS)</h3>
      <h4>https://www.first.org</h4> */}
      {/* <DataFetcher
        localFile={process.env.PUBLIC_URL + "/data/epss_data.json"}
        onDataLoaded={handleEPSSDataLoaded}
      /> */}
      {/* {EPSSBulletedList} */}
    </div>
  );
};

export default App;
